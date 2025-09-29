import { BookOpenText, FolderGit2, LaptopMinimal, Layers } from 'lucide-react';
import { useContext } from 'react';

import { Button } from '../ui/button';
import { NavigationMenuContext } from './context/navigationMenuContext';
import { NavigationMenuCategorieTitle } from './navigationMenuCategorieTitle';
import { NavigationMenuLink } from './navigationMenuLink';

interface NavigationMenuAboutMeProps {
  onLinkClick: () => void; // Tipagem correta para a função
}

export function NavigationMenuAboutMe({
  onLinkClick,
}: NavigationMenuAboutMeProps) {
  const { setSelectedMenu } = useContext(NavigationMenuContext);

  const handleLinkClick = (title: string) => {
    setSelectedMenu(title);
    onLinkClick(); // Manter a lógica de abertura/fechamento da sidebar
  };

  return (
    <li className="flex flex-col gap-1">
      <NavigationMenuCategorieTitle navigationMenuTitle="Quem sou eu" />
      <Button
        disabled
        className={`group flex items-center justify-between rounded bg-transparent px-4 py-2 text-foreground transition-all duration-300 hover:bg-muted`}
      >
        <div className="flex items-center gap-2">
          <FolderGit2 className="size-4 transition-all duration-300 group-hover:text-primary" />
          <p className="text-sm font-medium">Projetos</p>
        </div>
        <p className="text-xs">(Em breve)</p>
      </Button>
      <NavigationMenuLink
        to="/pt-BR/sobre-mim"
        navigationTitle="Sobre mim"
        navigationIcon={
          <BookOpenText className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        onClick={() => handleLinkClick('Sobre mim')}
      />
      <NavigationMenuLink
        to="/pt-BR/tecnologias"
        navigationTitle="Tecnologias"
        navigationIcon={
          <Layers className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        onClick={() => handleLinkClick('Tecnologias')}
      />
      <NavigationMenuLink
        to="/pt-BR/meu-setup"
        navigationTitle="Setup"
        navigationIcon={
          <LaptopMinimal className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        onClick={() => handleLinkClick('Setup')}
      />
    </li>
  );
}
