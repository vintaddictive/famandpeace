import { useState, useEffect, useRef } from "react";
import { Tilt } from "react-tilt";

// данные табов
const tabsData = [
  {
    id: 112313123,
    label: "Культура",
    content: [
      {
        label: "Новая выставка в Третьяковской галерее",
        image: "/news/1.png",
        description: "В Третьяковской галерее открылась новая выставка ",
      },
      {
        label: "Концерт симфонического оркестра",
        image: "/news/2.png",
        description:
          "Сегодня в Большом зале Московской консерватории состоится концерт. ",
      },
      {
        label: "Премьера нового фильма",
        image: "/news/4.png",
        description:
          'Сегодня в кинопрокате выходит новый фильм режиссера Никиты Михалкова "Солнечный удар". ',
      },
      {
        label: "Новая выставка в Третьяковской галерее",
        image: "/news/3.png",
        description: "В Третьяковской галерее открылась новая выставка",
      },
      {
        label: "Концерт симфонического оркестра",
        image: "/news/5.png",
        description:
          "Сегодня в Большом зале Московской консерватории состоится концерт. ",
      },
      {
        label: "Премьера нового фильма",
        image: "/news/6.png",
        description:
          'Сегодня в кинопрокате выходит новый фильм режиссера Никиты Михалкова "Солнечный удар". ',
      },
      {
        label: "Новая выставка в Третьяковской галерее",
        image: "/news/1.png",
        description: "В Третьяковской галерее открылась новая выставка ",
      },
      {
        label: "Концерт симфонического оркестра",
        image: "/news/2.png",
        description:
          "Сегодня в Большом зале Московской консерватории состоится концерт. ",
      },
      {
        label: "Премьера нового фильма",
        image: "/news/4.png",
        description:
          'Сегодня в кинопрокате выходит новый фильм режиссера Никиты Михалкова "Солнечный удар". ',
      },
      {
        label: "Новая выставка в Третьяковской галерее",
        image: "/news/3.png",
        description: "В Третьяковской галерее открылась новая выставка",
      },
      {
        label: "Концерт симфонического оркестра",
        image: "/news/5.png",
        description:
          "Сегодня в Большом зале Московской консерватории состоится концерт. ",
      },
      {
        label: "Премьера нового фильма",
        image: "/news/6.png",
        description:
          'Сегодня в кинопрокате выходит новый фильм режиссера Никиты Михалкова "Солнечный удар". ',
      },
    ],
  },
  {
    id: 21421341234,
    label: "Образование",
    content: [
      {
        label: "Новый курс по дизайну",
        image: "/news/1.png",
        description:
          "В онлайн-школе дизайна открылся новый курс по веб-дизайну. ",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/2.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/3.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
      {
        label: "Новый курс по дизайну",
        image: "/news/4.png",
        description:
          "В онлайн-школе дизайна открылся новый курс по веб-дизайну. ",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/5.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/6.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
      {
        label: "Новый курс по дизайну",
        image: "/news/1.png",
        description:
          "В онлайн-школе дизайна открылся новый курс по веб-дизайну. ",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/2.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/3.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
      {
        label: "Новый курс по дизайну",
        image: "/news/4.png",
        description:
          "В онлайн-школе дизайна открылся новый курс по веб-дизайну. ",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/5.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/6.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
    ],
  },
  {
    id: 312341234,
    label: "Благотворительность",
    content: [
      {
        label: "Фонд помощи детям-сиротам",
        image: "/news/1.png",
        description:
          "Фонд помощи детям-сиротам собирает пожертвования на строительство нового детского дома..",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/2.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/3.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
      {
        label: "Новый курс по дизайну",
        image: "/news/4.png",
        description:
          "В онлайн-школе дизайна открылся новый курс по веб-дизайну. ",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/5.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс  ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/6.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
      {
        label: "Фонд помощи детям-сиротам",
        image: "/news/1.png",
        description:
          "Фонд помощи детям-сиротам собирает пожертвования на строительство нового детского дома..",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/2.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/3.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
      {
        label: "Новый курс по дизайну",
        image: "/news/4.png",
        description:
          "В онлайн-школе дизайна открылся новый курс по веб-дизайну. ",
      },
      {
        label: "Конкурс студенческих работ",
        image: "/news/5.png",
        description:
          "В Московском государственном университете архитектуры и строительства проводится конкурс  ",
      },
      {
        label: "Новая библиотека книг по программированию",
        image: "/news/6.png",
        description:
          "В библиотеке МГУ открылась новая библиотека книг по программированию. ",
      },
    ],
  },
];

export function TabsState() {
  const [content, setContent] = useState(
    tabsData.map((tab) => tab.content.slice(0, 3))
  );

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [visibleBlocks, setVisibleBlocks] = useState(
    new Array(tabsData.length).fill(3)
  );
  const [maxBlocksPerRow, setMaxBlocksPerRow] = useState(3);
  const [maxBlockWidth, setMaxBlockWidth] = useState(30);
  const [activeContent, setActiveContent] = useState([]);

  const tabsRef = useRef([]);

  const tabsContainerRef = useRef(null);
  useEffect(() => {
    setVisibleBlocks(new Array(tabsData.length).fill(3));
  }, []);
  useEffect(() => {
    setActiveContent(
      tabsData[activeTabIndex].content.slice(0, visibleBlocks[activeTabIndex])
    );
  }, [activeTabIndex, visibleBlocks]);
  useEffect(() => {
    function handleScroll() {
      const scrollLeft = tabsContainerRef.current.scrollLeft;
      const currentTab = tabsRef.current[activeTabIndex];
      if (currentTab) {
        const maxLeft = scrollLeft;
        const maxRight = scrollLeft + tabsContainerRef.current.clientWidth;
        let newLeft = currentTab.offsetLeft;
        let newWidth = currentTab.clientWidth;

        if (newLeft < maxLeft) {
          // Если таб частично скрыт слева
          newWidth = newWidth - (maxLeft - newLeft);
          newLeft = maxLeft;
        } else if (newLeft + newWidth > maxRight) {
          // Если таб частично скрыт справа
          newWidth = maxRight - newLeft;
        }

        setTabUnderlineLeft(newLeft - scrollLeft);
        setTabUnderlineWidth(newWidth);
      }
    }

    tabsContainerRef.current.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      if (tabsContainerRef.current) {
        tabsContainerRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeTabIndex]);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    setActiveContent(tabsData[index].content.slice(0, visibleBlocks[index]));
  };
  useEffect(() => {
    // Обновление содержимого при изменении activeTabIndex
    setContent((prevContent) => {
      const newContent = [...prevContent];
      newContent[activeTabIndex] = tabsData[activeTabIndex].content.slice(
        0,
        visibleBlocks[activeTabIndex]
      );
      return newContent;
    });
  }, [activeTabIndex, visibleBlocks]);
  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    const handleResize = () => {
      let width = window.innerWidth;

      if (width < 768) {
        setMaxBlocksPerRow(1);
        setMaxBlockWidth(100);
      } else if (width < 1024) {
        setMaxBlocksPerRow(2);
        setMaxBlockWidth(47);
      } else {
        setMaxBlocksPerRow(3);
        setMaxBlockWidth(32);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setVisibleBlocks((prevVisibleBlocks) => {
      const updatedVisibleBlocks = [...prevVisibleBlocks];
      const currentContent = tabsData[activeTabIndex].content;
      updatedVisibleBlocks[activeTabIndex] = Array.isArray(currentContent)
        ? Math.min(activeTabIndex === 6 ? 12 : 6, currentContent.length)
        : 0; // Или какое-то другое значение для тех вкладок, где нет массива
      return updatedVisibleBlocks;
    });
  }, [activeTabIndex]);

  const handleLoadMore = () => {
    setVisibleBlocks((prevVisibleBlocks) => {
      const updatedVisibleBlocks = [...prevVisibleBlocks]; // Копирование предыдущего состояния
      const incrementValue = activeTabIndex === 3 ? 12 : 3; // Устанавливаем шаг приращения
      updatedVisibleBlocks[activeTabIndex] = Math.min(
        updatedVisibleBlocks[activeTabIndex] + incrementValue,
        tabsData[activeTabIndex].content.length
      );
      return updatedVisibleBlocks; // Возвращаем обновленное состояние
    });
  };

  return (
    <div
      className="w-full flex flex-col justify-center"
      style={{ position: "relative" }}
    >
      <div className=" text-red text-3xl md:text-5xl font-bold font-['Golos'] leading-[72px] mt-28">
        Статьи
      </div>
      <div className="relative w-full mb-[40px] mt-[40px]">
        <div
          ref={tabsContainerRef}
          className="tabsContainer flex space-x-10 md:space-x-20 border-b border-b-1 border-neutral-900/50 w-full overflow-x-auto"
        >
          {tabsData.map((tab, tabIdx) => {
            return (
              <button
                key={tab.id || tabIdx}
                ref={(el) => (tabsRef.current[tabIdx] = el)}
                className={`pt-2 pb-3 font-bold leading-loose text-md sm:text-lg md:text-[27px] whitespace-nowrap ${
                  activeTabIndex === tabIdx // Используйте tabIdx здесь
                    ? "text-neutral-800"
                    : "text-neutral-800/50"
                }`}
                onClick={() => handleTabClick(tabIdx)} // И используйте tabIdx здесь
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-[-3px] block h-2 rounded-full bg-red transition-all duration-300"
          style={{
            left: tabUnderlineLeft,
            width: tabUnderlineWidth,
            overflowX: "hidden",
          }}
        />
      </div>
      <div className="w-full items-stratch  justify-center flex flex-wrap ">
        <div className="w-full py-4 text-lg font-semibold items-stratch justify-center text-white leading-normal flex flex-wrap gap-5 ">
          {Array.isArray(tabsData[activeTabIndex].content) ? (
            <>
              {content[activeTabIndex].map((item, index) => (
                <Tilt
                  options={{
                    max: 15,
                    perspective: 700,
                    scale: 1,
                    speed: 100,
                    axis: null,
                    reset: true,
                    easing: "cubic-bezier(.86, 0, .07, 1)",
                  }}
                  key={`tab-${activeTabIndex}-block-${item.id || index}`}
									
                  // Изменение здесь
                  className={`max-h-[700px] px-2.5 pt-2.5 pb-5  bg-white rounded-2xl shadow-[4px_4px_21px_3px_rgba(47,47,47,0.15);] flex-col justify-center items-start gap-5 inline-flex ${
                    index % maxBlocksPerRow === maxBlocksPerRow - 1
                      ? "w-full"
                      : `w-1/${maxBlocksPerRow}`
                  }`}
                  style={{ maxWidth: `${maxBlockWidth}%` }}
                >
                  <img
									onClick={() => (window.location.href = "/russia")}
                    src={item.image}
                    className="rounded-2xl"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="w-52 opacity-75 text-black text-xs font-normal font-['Golos'] leading-none">
                    {item.label}
                  </div>
                  <div
                    className="w-full text-zinc-800
text-[27px]
font-bold
font-['Golos']
leading-tight"
                  >
                    {item.description}
                  </div>
                </Tilt>
              ))}
            </>
          ) : (
            tabsData[activeTabIndex].additionalContent ||
            tabsData[activeTabIndex].content
          )}
        </div>
        <div className="flex justify-center items-center mt-5">
          {tabsData[activeTabIndex].content.length >
            visibleBlocks[activeTabIndex] && (
            <button
              className="mb-[40px] px-[38px] py-[11px] xs:px-11 xs:py-[16px] text-base leading-tight shadow-[-1px_1px_11px_6px_rgba(212,18,22,0.24)] hover:shadow-[-1px_1px_11px_6px_rgba(55,113,183,0.24)]  font-semibold bg-gradient-rainred rounded-[15px] xs:rounded-[24px] justify-center  gap-2.5 inline-flex text-neutral-100 xs:text-[24px] xs:font-semibold xs:leading-7  transition ease-in-out hover:-translate-y-1 hover:bg-gradient-rainbow hover:delay-50 duration-100"
              onClick={handleLoadMore}
            >
              <p className="mb-[3px]">Загрузить ещё...</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
