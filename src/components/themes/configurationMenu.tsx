import { Moon, Settings, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import i18n from '@/i18n';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Brazil } from '../flags/brazil';
import { UnitedStates } from '../flags/united-states';
import { useTheme } from './theme-provider';

export function ConfigurationMenu() {
  const { setTheme } = useTheme();
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang: 'en' | 'pt') => {
    const pathSuffix = location.pathname.slice(`/${lang ?? ''}`.length);
    localStorage.setItem('language', newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    navigate(`/${newLang}${pathSuffix}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="group min-w-10 border md:border-none"
          variant="ghost"
          size="icon"
        >
          <Settings className="size-5 duration-150 group-hover:rotate-90" />
          <span className="sr-only">{t('nav.srViewOptions')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          {t('config.theme')}
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 size-4" /> {t('config.light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 size-4" /> {t('config.dark')}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuLabel className="text-xs text-muted-foreground">
          {t('config.language')}
        </DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
          <UnitedStates className="mr-2 size-4" /> {t('config.english')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('pt')}>
          <Brazil className="mr-2 size-4" /> {t('config.portuguese')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
