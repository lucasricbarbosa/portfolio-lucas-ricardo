import { ExternalLink } from 'lucide-react';
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

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
  return (
    <Link
      {...props}
      className="group flex items-center justify-between rounded bg-transparent px-4 py-2 transition-all duration-300 hover:bg-muted"
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
