import { Github, Linkedin, Mail } from 'lucide-react'

import { NavigationMenuCategorieTitle } from './navigationMenuCategorieTitle'
import { NavigationMenuLink } from './navigationMenuLink'

export function NavigationMenuMySocials() {
  return (
    <li className="flex flex-col gap-1">
      <NavigationMenuCategorieTitle navigationMenuTitle="Minhas redes" />
      <NavigationMenuLink
        target="_blank"
        to="https://github.com/lucasricbarbosa"
        navigationTitle="Github"
        navigationIcon={
          <Github className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        navigationIsLink={true}
      />
      <NavigationMenuLink
        target="_blank"
        to="https://www.linkedin.com/in/lucas-ricardo-barbosa/"
        navigationTitle="LinkedIn"
        navigationIcon={
          <Linkedin className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        navigationIsLink={true}
      />
      <NavigationMenuLink
        target="_blank"
        to="mailto:ricardolucas428@gmail.com"
        navigationTitle="E-mail"
        navigationIcon={
          <Mail className="size-4 transition-all duration-300 group-hover:text-primary" />
        }
        navigationIsLink={true}
      />
    </li>
  )
}
