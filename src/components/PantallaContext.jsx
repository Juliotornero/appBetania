import React, { createContext, useState, useEffect, useContext } from 'react';

const PantallaContext = createContext();

export const PantallaProvider = ({ children }) => {
  const [pantallaTablet, setPantallaTablet] = useState(false);
  const [pantallaDesktop, setPantallaDesktop] = useState(false);

  const handleResize = () => {
    const isTablet = window.innerWidth >= 768;
    const isDesktop = window.innerWidth >= 1024;
    setPantallaTablet(isTablet);
    setPantallaDesktop(isDesktop);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PantallaContext.Provider value={{ pantallaTablet, pantallaDesktop }}>
      {children}
    </PantallaContext.Provider>
  );
};

export const usePantalla = () => {
  const context = useContext(PantallaContext);
  if (!context) {
    throw new Error('usePantalla debe utilizarse dentro de un PantallaProvider');
  }
  return context;
};
