import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export const NavigationMenuContext = createContext<{
  selectedMenu: string;
  setSelectedMenu: Dispatch<SetStateAction<string>>;
}>({
  selectedMenu: '',
  setSelectedMenu: () => {},
});

export const NavigationMenuProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  return (
    <NavigationMenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </NavigationMenuContext.Provider>
  );
};

export const useNavigationMenu = () => useContext(NavigationMenuContext);
