import { Home, Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import profilePicture from '../../assets/profile-picture.png';
import { DowloadCVButton } from '../dowloadCVButton';
import { ConfigurationMenu } from '../themes/configurationMenu';
import { Button } from '../ui/button';
import { useNavigationMenu } from './context/navigationMenuContext';
import { NavigationMenuAboutMe } from './navigationMenuAboutMe';
import { NavigationMenuLink } from './navigationMenuLink';
import { NavigationMenuMySocials } from './navigationMySocials';

export function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedMenu } = useNavigationMenu();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="fixed top-0 z-50 w-full border-b border-r md:h-[100dvh] md:w-72 md:border-b-0">
      <div className="flex h-full w-full flex-col overflow-hidden bg-background transition-all duration-300">
        <header className="flex items-center justify-between border-b p-3 px-8 md:px-3">
          <Link
            onClick={() => {
              setSelectedMenu('Início');
            }}
            to="/pt-BR"
            className="flex items-center max-[390px]:hidden"
          >
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
          <div className="w-auto text-right max-[390px]:w-full md:hidden">
            <ConfigurationMenu />
            <Button
              className="ml-2 min-w-10 border md:border-none"
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
            >
              <Menu className="size-5" />
              <span className="sr-only">Opções de visualização</span>
            </Button>
          </div>
        </header>
        <div
          className="flex flex-col justify-between transition-all duration-500 data-[sidebar-open='true']:h-[calc(100dvh-67px)] data-[sidebar-open='false']:max-md:h-0 md:h-full"
          data-sidebar-open={isOpen}
        >
          <ul className="h-full p-3">
            <li>
              <NavigationMenuLink
                onClick={() => {
                  toggleSidebar();
                  setSelectedMenu('Início');
                }}
                to="/pt-BR"
                navigationTitle="Início"
                navigationIcon={
                  <Home className="size-4 transition-all duration-300 group-hover:text-primary" />
                }
              />
            </li>
            <NavigationMenuAboutMe onLinkClick={toggleSidebar} />
            <NavigationMenuMySocials />
          </ul>
          <div className="flex items-center gap-3 border-t p-3">
            <DowloadCVButton />
            <ConfigurationMenu />
          </div>
        </div>
      </div>
    </aside>
  );
}
