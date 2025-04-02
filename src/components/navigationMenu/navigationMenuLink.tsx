import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { useNavigationMenu } from './context/navigationMenuContext';

interface NavigationMenuLinkProps extends LinkProps {
  navigationIcon: ReactNode;
  navigationTitle: string;
  navigationIsLink?: boolean;
}

export function NavigationMenuLink({
  navigationIcon,
  navigationTitle,
  navigationIsLink,
  ...props
}: NavigationMenuLinkProps) {
  const { selectedMenu } = useNavigationMenu();

  console.log(selectedMenu);
  console.log(navigationTitle);

  const isMavigationMenuSelected = selectedMenu === navigationTitle;

  const navigationMenuActiveStyles = 'bg-muted';

  return (
    <Link
      {...props}
      className={`group flex items-center justify-between rounded px-4 py-2 transition-all duration-300 hover:bg-muted ${isMavigationMenuSelected ? navigationMenuActiveStyles : 'bg-transparent'}`}
    >
      <div className="flex items-center gap-2">
        {navigationIcon}
        <p className="text-sm font-medium">{navigationTitle}</p>
      </div>
      {navigationIsLink === true && (
        <ExternalLink className="size-4 text-primary" />
      )}
    </Link>
  );
}
