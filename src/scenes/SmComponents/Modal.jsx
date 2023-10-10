import React from "react";

const Modal = ({ data, onClose }) => {
  if (!data) return null; // Если данных нет, не отображаем модальное окно

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: "20px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // justify-content: start для флексбокса
      }}
    >
      <h2>Страна</h2>{" "}
      {/* Предположим, что у объекта data есть свойство title */}
      <p>Описание</p> {/* и свойство description */}
      <a href={data.link} target="_blank" rel="noreferrer">
        Подробнее...
      </a>{" "}
      {/* и свойство link */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          cursor: "pointer",
        }}
      >
        X
      </button>{" "}
      {/* Кнопка для закрытия модального окна */}
    </div>
  );
};

export default Modal;
