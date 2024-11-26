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
  setSelectedMenu: () => {}, // Valor padrão inicial, pode ser uma função vazia
});

export const NavigationMenuProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  console.log(selectedMenu);

  return (
    <NavigationMenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </NavigationMenuContext.Provider>
  );
};

// Custom hook para usar o contexto
export const useNavigationMenu = () => useContext(NavigationMenuContext);
