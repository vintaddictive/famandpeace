import {createContext, useState} from 'react';

export const MenuContext = createContext(); 

export const MenuProvider = ({children}) => {

  const [openMenu, setOpenMenu] = useState(null);

  const handleOpen = (menu) => {
    setOpenMenu(menu);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <MenuContext.Provider value={{openMenu, handleOpen, handleClose}}>
      {children}
    </MenuContext.Provider>
  ); 
}
