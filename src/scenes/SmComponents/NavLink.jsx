import { Link as RouterLink } from "react-router-dom";

const NavLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase(); // переводим page в нижний регистр

  const handleClick = () => {
    setSelectedPage(lowerCasePage); // обновляем selectedPage в состоянии родителя
    const element = document.getElementById(lowerCasePage); // находим элемент по id
    element.scrollIntoView({ behavior: "smooth" }); // прокручиваем к элементу
  };

  return (
    <RouterLink
      to="#" // Мы не переходим на другую страницу, так что просто используем "#"
      onClick={handleClick} // вызываем handleClick при клике
      className={`${
        selectedPage === lowerCasePage ? "text-red" : ""
      } hover:text-red transition duration-500`}
    >
      {page}
    </RouterLink>
  );
};

export default NavLink;
