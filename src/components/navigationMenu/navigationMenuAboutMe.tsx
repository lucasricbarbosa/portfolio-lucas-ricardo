import { BookOpenText, FolderGit2, LaptopMinimal, Layers } from 'lucide-react'

import { NavigationMenuCategorieTitle } from './navigationMenuCategorieTitle'
import { NavigationMenuLink } from './navigationMenuLink'

export function NavigationMenuAboutMe() {
  return (
    <li className="flex flex-col gap-1">
      <NavigationMenuCategorieTitle navigationMenuTitle="Quem sou eu" />
      <NavigationMenuLink
        to="/"
        navigationTitle="Projetos"
        navigationIcon={
          <FolderGit2 className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
      <NavigationMenuLink
        to="/pt-BR/sobre-mim"
        navigationTitle="Sobre mim"
        navigationIcon={
          <BookOpenText className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
      <NavigationMenuLink
        to="/pt-BR/tecnologias"
        navigationTitle="Tecnologias"
        navigationIcon={
          <Layers className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
      <NavigationMenuLink
        to="/"
        navigationTitle="Setup"
        navigationIcon={
          <LaptopMinimal className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
      />
    </li>
  )
}
