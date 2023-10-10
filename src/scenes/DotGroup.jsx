import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-red before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-red before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#Главная"
        className={`${
          selectedPage === "Главная" ? selectedStyles : "bg-neutral-600"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("Главная")}
      />
      <AnchorLink
        href="#О программе"
        className={`${
          selectedPage === "О программе" ? selectedStyles : "bg-neutral-600"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("О программе")}
      />

      <AnchorLink
        href="#Статьи"
        className={`${
          selectedPage === "Статьи" ? selectedStyles : "bg-neutral-600"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("Статьи")}
      />

      <AnchorLink
        href="#Контакты"
        className={`${
          selectedPage === "Контакты" ? selectedStyles : "bg-neutral-600"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("Контакты")}
      />


    </div>
  );
};

export default DotGroup;