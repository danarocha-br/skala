import React, { createContext, useCallback, useContext, useState } from 'react';

interface NavigationContextData {
  changeNavigationStatus: () => void;
  isSidebarOpen: boolean;
}

interface NavigationProvider {
  children: React.ReactNode;
}

const NavigationContext = createContext(
  {} as NavigationContextData
);

const NavigationProvider = ({ children }: NavigationProvider) => {
  const [isOpen, setOpen] = useState(true);

  const changeNavigationStatus = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <NavigationContext.Provider
      value={{
        changeNavigationStatus,
        isSidebarOpen: isOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      'useNavigation must be used within a NavigationProvider.'
    );
  }

  return context;
}

export { NavigationProvider, useNavigation };
