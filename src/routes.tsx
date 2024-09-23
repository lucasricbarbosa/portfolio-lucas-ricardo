import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { AboutMe } from './pages/app/pt-BR/aboutMe'
import { Home } from './pages/app/pt-BR/home'
import { SearchTest } from './pages/app/pt-BR/searchTest'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '/pt-BR',
    element: <AppLayout />,
    children: [
      { path: '/pt-BR', element: <Home /> },
      { path: '/pt-BR/sobre-mim', element: <AboutMe /> },
      { path: '/pt-BR/teste', element: <SearchTest /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },

  // { path: '/', element: <Dashboard /> },
  // { path: '/sign-in', element: <SignIn /> },
])
