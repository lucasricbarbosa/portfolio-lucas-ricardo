import { useEffect, useLayoutEffect } from 'react';
import {
  createBrowserRouter,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import i18n from './i18n';
import { AppLayout } from './pages/_layouts/app';
import { AuthLayout } from './pages/_layouts/auth';
import { AboutMe } from './pages/app/pt-BR/aboutMe';
import { Home } from './pages/app/pt-BR/home';
import { MyProjects } from './pages/app/pt-BR/myProjects';
import { MySetup } from './pages/app/pt-BR/mySetup';
import { MyStacks } from './pages/app/pt-BR/myStacks';
import { SignIn } from './pages/auth/sign-in';

type Lang = 'en' | 'pt';

function isValidLang(lang: string | undefined): lang is Lang {
  return lang === 'en' || lang === 'pt';
}

function detectTargetLang(): Lang {
  const stored = localStorage.getItem('language');
  if (stored === 'en' || stored === 'pt') return stored;
  const detected = i18n.language?.toLowerCase() ?? 'en';
  return detected.startsWith('pt') ? 'pt' : 'en';
}

function RootRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${detectTargetLang()}`, { replace: true });
  }, [navigate]);

  return null;
}

function LangWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    if (!isValidLang(lang)) {
      const targetLang = detectTargetLang();
      const pathSuffix = location.pathname.slice(`/${lang ?? ''}`.length);
      navigate(`/${targetLang}${pathSuffix}`, { replace: true });
      return;
    }
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  }, [lang, location.pathname, navigate]);

  if (!isValidLang(lang)) return null;

  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRedirect />,
  },
  {
    path: '/:lang',
    element: <LangWrapper />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'projects', element: <MyProjects /> },
          { path: 'about-me', element: <AboutMe /> },
          { path: 'stacks', element: <MyStacks /> },
          { path: 'setup', element: <MySetup /> },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
]);
