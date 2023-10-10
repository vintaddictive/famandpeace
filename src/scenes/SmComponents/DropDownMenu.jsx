import React, { useState, useContext } from "react";

import {MenuContext} from './MenuContext';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {Link} from "react-router-dom";

import { MenuProvider } from './MenuContext';

export const DropdownMenu1 = ({ setIsMenuToggled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");


	const {openMenu, handleOpen, handleClose} = useContext(MenuContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setArrowDirection(arrowDirection === "down" ? "up" : "down");
  };
  const handleLinkClick = () => {
    setIsMenuToggled(false);
  }
  
  return (
		<div
		 onClick={toggleMenu}

	>
      <div
        className={`text-black text-3xl sm:text-xl font-bold sm:font-semibold font-Golos leading-7 cursor-pointer hover:text-red transition duration-100 flex flex-row gap-2${openMenu === 'menu1' ? 'open' : ''}`}
        onClick={toggleMenu}  
      >
        <span className="menu-title">О программе</span>
        <span
          className={`mt-1 sm:mt-[6px] ${
            arrowDirection === "down " ? "rotate-180" : "rotate-0"
          }`}
        >
          {arrowDirection === "down" ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 relative md:absolute bg-white rounded-lg flex flex-col ">
          <Link to="/about" className="text-black text-lg font-normal font-['Golos'] leading-loose cursor-pointer hover:text-red transition duration-100"
					onClick={handleLinkClick}>
					О программе
          </Link>
          <Link to="/about" className="text-black text-lg font-normal font-['Golos'] leading-loose cursor-pointer hover:text-red transition duration-100"
					onClick={handleLinkClick}>
					Страны — участницы
          </Link>
          <Link to="/about" className="text-black text-lg font-normal font-['Golos'] leading-loose cursor-pointer hover:text-red transition duration-100"
					onClick={handleLinkClick}>
					Пресс-центр
          </Link>
          <Link to="/about" className="text-black text-lg font-normal font-['Golos'] leading-loose cursor-pointer hover:text-red transition duration-100"
					onClick={handleLinkClick}>
					Экспертный совет
          </Link>
        </div>
      )}
    </div>
  );
};

export const DropdownMenu2 = ({ setIsMenuToggled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState("down");
	const {openMenu, handleOpen, handleClose} = useContext(MenuContext);

  const handleLinkClick = () => {
    setIsMenuToggled(false);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setArrowDirection(arrowDirection === "down" ? "up" : "down");
  };

  return (
		<div
		onClick={toggleMenu}
	>
      <div
        className={`text-black text-3xl sm:text-xl font-bold sm:font-semibold font-Golos leading-7 cursor-pointer hover:text-red transition duration-100 flex flex-row gap-2${openMenu === 'menu1' ? 'open' : ''}`}
        onClick={toggleMenu}  
      >
        <span className="menu-title">Статьи</span>
        <span
          className={`mt-1 sm:mt-[6px] ${
            arrowDirection === "down " ? "rotate-180" : "rotate-0"
          }`}
        >
          {arrowDirection === "down" ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      {isOpen && (
        <div className="mt-2 relative md:absolute bg-white rounded-lg flex flex-col">
          <Link to="/states" className="text-black text-lg font-normal font-['Golos'] leading-loose cursor-pointer hover:text-red transition duration-100"
					onClick={handleLinkClick}>
            Культура
          </Link>
          <Link to="/states" className="text-black text-lg font-normal font-['Golos'] leading-loose cursor-pointer hover:text-red transition duration-100"
					onClick={handleLinkClick}>
            Образование
          </Link>
          <Link to="/states" className="text-black text-lg font-normal font-['Golos'] leading-loose cursor-pointer hover:text-red transition duration-100"
					onClick={handleLinkClick}>
            Благотворительность
          </Link>
        </div>
      )}
    </div>
  );
};



