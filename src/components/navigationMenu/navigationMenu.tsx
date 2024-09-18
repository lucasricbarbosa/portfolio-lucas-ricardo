import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

import profilePicture from '../../assets/profile-picture.png'
import { DowloadCVButton } from '../dowloadCVButton'
import { ConfigurationMenu } from '../themes/configurationMenu'
import { NavigationMenuAboutMe } from './navigationMenuAboutMe'
import { NavigationMenuLink } from './navigationMenuLink'
import { NavigationMenuMySocials } from './navigationMySocials'

export function NavigationMenu() {
  return (
    <aside className="fixed top-0 z-50 w-full border-b border-r md:h-[100dvh] md:w-72 md:border-b-0">
      <div className="flex h-full w-full flex-col overflow-hidden bg-background transition-all duration-300">
        <Link to="/" className="flex items-center border-b p-3">
          <img className="size-9" src={profilePicture} alt="" />
          <div className="ml-2">
            <h4 className="text-sm font-medium text-foreground">
              Lucas Ricardo
            </h4>
            <p className="text-xs font-normal text-muted-foreground">
              Desenvolvedor Front-End
            </p>
          </div>
        </Link>
        <ul className="h-full p-3">
          <li>
            <NavigationMenuLink
              to="/"
              navigationTitle="Início"
              navigationIcon={
                <Home className="size-4 transition-all duration-300 group-hover:text-primary" />
              }
            />
          </li>
          <NavigationMenuAboutMe />
          <NavigationMenuMySocials />
        </ul>
        <div className="flex items-center gap-3 border-t p-3">
          <DowloadCVButton />
          <ConfigurationMenu />
        </div>
      </div>
    </aside>
  )
}
