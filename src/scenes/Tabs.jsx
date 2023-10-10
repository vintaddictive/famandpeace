import { useEffect, useRef, useState } from "react";

const tabsData = [
  {
    label: "Миссия",
    content: (
      <p>
        Объединение усилий организаций, учреждений и граждан по увеличению
        эффективности работы в сфере отстаивания традиционных духовно —
        нравственных и семейных ценностей
      </p>
    ),
  },
  {
    label: "Цели",
    content: (
      <p>
        Каждый из нас понимает очевидную вещь: укрепление и развитие внутренней
        структуры способствует повышению качества как самодостаточных
      </p>
    ),
  },
  {
    label: "Задачи",
    content: (
      <p>
        Принимая во внимание показатели успешности, глубокий уровень погружения
        позволяет оценить значение новых принципов
      </p>
    ),
  },
];

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

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

  return (
    <div className=" flex flex-col w-full items-center justify-center ">
      <div className="relative w-full flex justify-center ">
        <div className="flex justify-center md:justify-start items-center  space-x-10 md:space-x-20 md:border-b border-b-1  border-white w-4/6 md:w-5/6 ">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`pt-2 pb-3  leading-loose text-lg md:text-[27px] whitespace-nowrap ${
                  activeTabIndex === idx
                    ? "text-white font-bold tracking-normal"
                    : "text-white/70 font-semibold tracking-wide"
                }`}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-[-2px] block h-[6px] rounded-full w-[160px] bg-white transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="relative w-full flex justify-center md:justify-start md:w-5/6 ">
        <div className="font-['Golos'] py-4 text-sm font-normal md:text-lg md:font-semibold w-5/6 text-white leading-[18.20px] md:leading-2 flex justify-center md:justify-start md:w-full flex-col gap-6 md:max-w-[800px]">
          <p className="">{tabsData[activeTabIndex].content}</p>
          <p className="">{tabsData[activeTabIndex].content}</p>
          <p className="">{tabsData[activeTabIndex].content}</p>
        </div>
      </div>
    </div>
  );
}
