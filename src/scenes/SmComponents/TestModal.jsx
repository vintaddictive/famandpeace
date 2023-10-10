import React from "react";

const TestModal = ({ x, y, markerData }) => {
  if (!markerData) return null; // Добавьте эту проверку
  // Примените x и y для позиционирования модального окна
  const modalStyle = {
    position: "fixed",
    top: `${y}px`,
    left: `${x}px`,
    // Добавьте дополнительные стили для модального окна, такие как ширина, высота, цвет фона и т.д.
    width: "480px",
    borderRadius: "8px",
    zIndex: 1000, // Убедитесь, что модальное окно отображается поверх других элементов
  };

  return (
    <div style={modalStyle} className="bg-white/80 backdrop-blur h-max">
      {/* Отобразите данные маркера в модальном окне */}
      <div className="flex flex-col gap-[8px] m-4">
        <div className="flex justify-start items-center gap-2 text-red text-[27px] leading-tight font-bold font-['Golos']">
          {" "}
          <img src={markerData.flag} alt="" className="w-[25px] h-[30px]" />
          {markerData.title}
        </div>
        <p className="text-black text-lg font-medium font-['Golos'] leading-tight">
          {markerData.content}
        </p>
      </div>
    </div>
  );
};

export default TestModal;
