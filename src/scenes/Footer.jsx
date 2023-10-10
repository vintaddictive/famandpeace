import React from "react";
import { Link } from "react-router-dom";
// Импортируйте другие компоненты, если они необходимы
import { DropdownMenu1 } from "./SmComponents/DropDownMenu";
import { DropdownMenu2 } from "./SmComponents/DropDownMenu";
import SearchComponent from "./SmComponents/SearchComponent";
import { MenuProvider } from "./SmComponents/MenuContext";


const Footer = () => {
  // Если ваши компоненты Dropdown используют состояние, убедитесь, что вы его инициализировали
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);

  const toggleMenu = (menuNumber) => {
    if (menuNumber === 1) setIsOpen1(!isOpen1);
    else if (menuNumber === 2) setIsOpen2(!isOpen2);
  };

  return (
    <div className="flex flex-col justify-center gap-10 w-full mt-[120px]  mx-auto bg-[#f6f6f6]">
      <div className="mb-[30px]">
        <img
          src="/fampeace.svg"
          alt="logopodval"
          className="w-44 sm:w-72 h-12 relative mb-10 "
        />
        <div
          id="контакты"
          className="flex sm:flex-row flex-col justify-between"
        >
          <div className="flex sm:flex-row flex-col justify-start items-start gap-6 sm:gap-10">
					<MenuProvider>
  <DropdownMenu1 />
  <DropdownMenu2 />
</MenuProvider>
            <Link to="/russia" className="text-black text-2xl sm:text-xl font-bold sm:font-semibold font-Golos leading-7">
              Контакты
            </Link>
          </div>

          <div className="sm:ml-auto ml-0 mr-auto sm:mr-0 flex-shrink-0 mt-4 sm:mt-0 flex flex-col sm:justify-end justify-start gap-4 align-self-start">
					<SearchComponent  />
            <div className="sm:ml-auto ml-0 text-black text-xl font-normal sm:font-semibold font-['Golos'] leading-7">
              +7 (495) 111-11-11
            </div>
            <div className="sm:ml-auto ml-0 text-black text-xl font-normal sm:font-semibold font-['Golos'] underline leading-7">
              email@email.com
            </div>
            <div className="sm:ml-auto ml-0 flex flex-row justify-start sm:justify-end gap-6">
              <a href="https://vk.com">
                <img
                  src="/vkontakte.svg"
                  className="sm:ml-auto ml-0 "
                  alt="SVG 1"
                />
              </a>
              <a href="https://web.telegram.org">
                <img
                  src="/telega.svg"
                  className="sm:ml-auto ml-0 "
                  alt="SVG 2"
                />
              </a>
            </div>
            <a
              href="#"
              className="sm:ml-auto ml-0 text-black text-xs font-normal font-['Golos'] leading-none"
            >
              {" "}
              2023. Все права защищены.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
