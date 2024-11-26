interface NavigationMenuCategorieTitleProps {
  navigationMenuTitle: string;
}

export function NavigationMenuCategorieTitle({
  navigationMenuTitle,
}: NavigationMenuCategorieTitleProps) {
  return (
    <h3 className="pb-1 pl-3 pt-6 text-xs text-muted-foreground">
      {navigationMenuTitle}
    </h3>
  );
}
