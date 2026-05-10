import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { NavigationMenuCategorieTitle } from './navigationMenuCategorieTitle';
import { NavigationMenuLink } from './navigationMenuLink';

export function NavigationMenuMySocials() {
  const { t } = useTranslation();

  return (
    <li className="flex flex-col gap-1">
      <NavigationMenuCategorieTitle navigationMenuTitle={t('nav.myNetworks')} />
      <NavigationMenuLink
        target="_blank"
        to="https://github.com/lucasricbarbosa"
        navigationTitle={t('nav.github')}
        navigationIcon={
          <Github className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        navigationIsLink={true}
      />
      <NavigationMenuLink
        target="_blank"
        to="https://www.linkedin.com/in/lucas-ricardo-barbosa/"
        navigationTitle={t('nav.linkedin')}
        navigationIcon={
          <Linkedin className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        navigationIsLink={true}
      />
      <NavigationMenuLink
        target="_blank"
        to="mailto:ricardolucas428@gmail.com"
        navigationTitle={t('nav.email')}
        navigationIcon={
          <Mail className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        navigationIsLink={true}
      />
    </li>
  );
}
