import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavigationMenuLinkProps extends NavLinkProps {
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
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `group flex items-center justify-between rounded px-4 py-2 transition-all duration-300 hover:bg-muted ${isActive ? 'bg-muted' : 'bg-transparent'}`
      }
    >
      <div className="flex items-center gap-2">
        {navigationIcon}
        <p className="text-sm font-medium">{navigationTitle}</p>
      </div>
      {navigationIsLink === true && (
        <ExternalLink className="size-4 text-primary" />
      )}
    </NavLink>
  );
}
