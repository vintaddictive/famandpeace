import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { Link } from "react-router-dom";
import AboutPage from "./scenes/AboutPage"; // Импортируйте страницу "О программе"
import NewsComponent from "./scenes/NewsComponent";
import States from "./scenes/States";
import CountryPage from "./scenes/CountryPage";

function App() {
  const [selectedPage, setSelectedPage] = useState("Главная");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("Главная");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (window) window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-[#f6f6f6]}">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div
        className="w-11/12 sm:w-5/6 mx-auto md:h-full"
        style={{ maxWidth: "1400px" }}
      >
        {/* {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )} */}
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Маршрут для главной страницы */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsComponent />} />
					<Route path="/states" element={<States />} />
					<Route path="/russia" element={<CountryPage />} />
          {/* Маршрут для страницы "О программе" */}
        </Routes>
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
