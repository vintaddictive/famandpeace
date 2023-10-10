import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import biglogo from "../assets/biglogo.png";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { Tabs } from "./Tabs";
import { TabsState } from "./News";
import SimpleSlider from "./TabsState";
import ImageSlider from "./ImageSlider";
import { DropdownMenu1, DropdownMenu2 } from "./SmComponents/DropDownMenu";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import SearchComponent from "./SmComponents/SearchComponent";
// import EarthCanvas from "./earth";
import TestEarth from "./SmComponents/TestEarth";
import { Canvas } from "@react-three/fiber/dist/react-three-fiber.cjs";
import Footer from "./Footer";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleMenu = (menu) => {
    if (menu === "menu1") {
      setIsOpen1(!isOpen1);
      setIsOpen2(false); // Закрываем меню 2 при открытии меню 1
    } else if (menu === "menu2") {
      setIsOpen2(!isOpen2);
      setIsOpen1(false); // Закрываем меню 1 при открытии меню 2
    }
  };
  return (
    <div className="flex flex-col justify-center mt-10">
      {/* Здесь должно быть #Главная*/}
      <div
        id="главная"
        className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-0 xs:py-0 md:py-0"
      >
        <div className="relative z-30 flex flex-col justify-start items-start text-red xs:text-6xl text-5xl font-bold leading-[72px] xs:leading-10 md:w-6/12 mt-20 md:mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className="md:absolute relative md:top-[-54px] md:left-0 w-full"
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Семья.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Традиции.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Милосердие.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Будущее.")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </div>
            {/* Other Elements Here */}
          </motion.div>
          <p className="w-full text-black xs:text-lg xs:font-semibold text-sm font-normal leading-tight mt-[30px]">
            Рыбатекст используется дизайнерами, проектировщиками и
            фронтендерами, когда нужно быстро заполнить макеты или прототипы
            содержимым. Это тестовый контент, который не должен нести никакого
            смысла
          </p>
          <div className="xs:mt-10">
            <Link
              to="/about"
              className="mb-[40px] px-[38px] py-[11px] xs:px-12 xs:py-[18px] text-base leading-tight shadow-[-1px_1px_11px_6px_rgba(212,18,22,0.24)] hover:shadow-[-1px_1px_11px_6px_rgba(55,113,183,0.24)]  font-semibold bg-gradient-rainred rounded-[15px] xs:rounded-[24px] justify-center  gap-2.5 inline-flex text-neutral-100 xs:text-[24px] xs:font-semibold xs:leading-7  transition ease-in-out hover:-translate-y-1 hover:bg-gradient-rainbow hover:delay-50 duration-100"
            >
              О программе
            </Link>
          </div>
        </div>
        <div className="relative w-full h-full md:w-11/12 max-w-[800px] ">
          <img src="/biglogo.png" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Image Container */}
      {/* <div className="md:w-full md:relative">
        <img
          src="/biglogo.png"
          className="w-full md:absolute md:inset-0 md:h-full md:object-cover"
        />
      </div> */}
      {/* Здесь должно быть #О программе*/}{" "}
      <div
        id="о программе"
        className="z-10 rounded-lg mx-auto w-full h-[444px] sm:h-[480px] bg-gradient-rainbow md:rounded-[80px] shadow flex items-start justify-start py-[15px] md:py-[50px]"
      >
        <Tabs />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-[40px] mt-[80px] md:mt-[120px]">
        <div className="md:h-[1400px] ">
          <TestEarth />
          <div id="статьи"></div>
        </div>
      </div>
      <div className="w-full h-full flex-col justify-start items-start flex">
        {/* Здесь должно быть #Статьи*/}{" "}
        <div className="w-full flex justify-center  h-max relative">
          <TabsState />
        </div>
      </div>
      <div className="w-full rounded-lg sm:w-full h-[393px] sm:h-[577px] bg-gradient-rainbow sm:rounded-3xl shadow flex flex-col gap-[55px] md:gap-[77px] justify-center items-center ">
        <div className="text-zinc-100 text-4xl sm:text-6xl font-bold font-['Golos'] leading-10">
          Партнеры
        </div>
        <SimpleSlider />
      </div>
      {/* Здесь должно быть #Контакты */}
      <div id="контакты" className="flex sm:flex-row flex-col justify-between">
        <Footer />
      </div>
      <div className="flex flex-col justify-end mt-4"></div>
    </div>
  );
};
export default Landing;
