import { BookOpenText, FolderGit2, LaptopMinimal, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { NavigationMenuCategorieTitle } from './navigationMenuCategorieTitle';
import { NavigationMenuLink } from './navigationMenuLink';

interface NavigationMenuAboutMeProps {
  onLinkClick: () => void;
}

export function NavigationMenuAboutMe({
  onLinkClick,
}: NavigationMenuAboutMeProps) {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation();

  return (
    <li className="flex flex-col gap-1">
      <NavigationMenuCategorieTitle navigationMenuTitle={t('nav.whoAmI')} />
      <NavigationMenuLink
        to={`/${lang}/projects`}
        navigationTitle={t('nav.projects')}
        navigationIcon={
          <FolderGit2 className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        onClick={onLinkClick}
      />
      <NavigationMenuLink
        to={`/${lang}/about-me`}
        navigationTitle={t('nav.aboutMe')}
        navigationIcon={
          <BookOpenText className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        onClick={onLinkClick}
      />
      <NavigationMenuLink
        to={`/${lang}/stacks`}
        navigationTitle={t('nav.technologies')}
        navigationIcon={
          <Layers className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        onClick={onLinkClick}
      />
      <NavigationMenuLink
        to={`/${lang}/setup`}
        navigationTitle={t('nav.setup')}
        navigationIcon={
          <LaptopMinimal className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        onClick={onLinkClick}
      />
    </li>
  );
}
