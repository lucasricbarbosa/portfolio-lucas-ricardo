import { BookOpenText, FolderGit2, LaptopMinimal, Layers } from 'lucide-react'

import { NavigationMenuCategorieTitle } from './navigationMenuCategorieTitle'
import { NavigationMenuLink } from './navigationMenuLink'

interface NavigationMenuAboutMeProps {
  onLinkClick: () => void // Tipagem correta para a função
}

export function NavigationMenuAboutMe({
  onLinkClick,
}: NavigationMenuAboutMeProps) {
  return (
    <li className="flex flex-col gap-1">
      <NavigationMenuCategorieTitle navigationMenuTitle="Quem sou eu" />
      <NavigationMenuLink
        to="/"
        navigationTitle="Projetos"
        onClick={onLinkClick}
        navigationIcon={
          <FolderGit2 className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
      <NavigationMenuLink
        onClick={onLinkClick}
        to="/pt-BR/sobre-mim"
        navigationTitle="Sobre mim"
        navigationIcon={
          <BookOpenText className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
      <NavigationMenuLink
        onClick={onLinkClick}
        to="/pt-BR/tecnologias"
        navigationTitle="Tecnologias"
        navigationIcon={
          <Layers className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
      <NavigationMenuLink
        onClick={onLinkClick}
        to="/pt-BR/meu-setup"
        navigationTitle="Setup"
        navigationIcon={
          <LaptopMinimal className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
    </li>
  )
}
