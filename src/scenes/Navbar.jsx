import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import menuicon from "../assets/menu-icon.svg";
import closeicon from "../assets/close-icon.svg";
import SearchComponent from "./SmComponents/SearchComponent";
import { DropdownMenu1, DropdownMenu2 } from "./SmComponents/DropDownMenu";
import { Link } from "react-router-dom";
import { MenuProvider } from "./SmComponents/MenuContext";


const NavLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(" ", "");
  return (
    <a
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-red" : ""
      } hover:text-red transition duration-500`}
    >
      {page}
    </a>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav className="z-40 w-full fixed top-0 py-3 bg-white ">
      <div className="w-11/12  flex items-center justify-between mx-auto  gap-10 h-12 ">
        <Link to={"/"}>
          <img src="/logomain.png" alt="logomain" />
        </Link>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 mx-auto items-center text-neutral-800 text-md md:text-lg  font-semibold">
<MenuProvider>
  <DropdownMenu1 />
  <DropdownMenu2 />
</MenuProvider>
<Link to="/russia" className="text-neutral-800 text-md md:text-lg  font-semibold"
								onClick={() => setIsMenuToggled(false)}>
                  Контакты
                </Link>
          </div>
        ) : (
          <button className="" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <img src="/menu.svg" alt="Menu Icon" />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-white w-screen flex flex-col">
            <div className="flex-grow-0">
              <div className="w-11/12 flex items-center justify-between mx-auto gap-10 h-[72px]">
                <Link to={"/"}>
                  <img src="/logomain.png" alt="logomain" />
                </Link>
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img src="/menuclose.svg" alt="Close Icon" />
                </button>
              </div>
              <div className="flex flex-col gap-6 w-11/12 mx-auto text-3xl font-bold items-start justify-start mt-6">
							<SearchComponent  />
								<MenuProvider>
  <DropdownMenu1 />
  <DropdownMenu2 />
</MenuProvider>
                <Link to="/russia" className="text-black text-3xl font-bold sm:font-semibold font-['Golos'] leading-7"
								onClick={() => setIsMenuToggled(false)}>
                  Контакты
                </Link>
              </div>
            </div>
            <div className="flex-grow flex flex-col justify-end ml-4 mb-10 gap-4">
              <div className="text-black text-xl font-normal sm:font-semibold font-['Golos'] leading-7">
                +7 (495) 111-11-11
              </div>
              <div className="text-black text-xl mb-2 font-normal sm:font-semibold font-['Golos'] underline leading-7">
                email@email.com
              </div>
              <div className="flex flex-row justify-start sm:justify-end gap-6">
                <a href="https://example.com">
                  <img src="/vkontakte.svg" className="" alt="SVG 1" />
                </a>
                <a href="https://example.com">
                  <img src="/telega.svg" className="" alt="SVG 2" />
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="hidden md:flex flex-shrink-0 flex-row gap-[15px] items-center">
          <Link
            to={"/russia"}
            className=" text-black text-xs font-normal font-['Golos'] leading-none"
          >
            En
          </Link>
					<Link
            to={"/russia"}
          >
						<img src="/glasses.svg" alt="blind" />
          </Link>
          <SearchComponent  />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
