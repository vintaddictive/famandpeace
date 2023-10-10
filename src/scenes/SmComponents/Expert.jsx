import React from "react";

const Expert = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-[40px] mt-[40px]">
      <div
        className="flex h-max md:h-[378px] flex-col md:flex-row items-center justify-start
        gap-[40px] md:gap-[80px] mx-auto w-full"
        style={{ flexShrink: 0 }}
      >
        <img src="/Expert1.png" alt="one" className="w-[300px]  h-[378px]" />
        <div className=" md:h-[378px] flex justify-center gap-6 flex-col flex-shrink-1 flex-grow-0 items-center md:items-start w-5/6 md:w-full">
          <div className="text-black text-[40px] font-bold font-['Golos'] leading-[48px]">
            Кузнецова Анна Юрьевна
          </div>
          <div className=" text-black text-lg font-medium font-['Golos'] leading-normal">
            вице-спикер Государственной Думы ФС РФ, председатель Комиссии
            Генерального Совета Всероссийской политической партии «ЕДИНАЯ
            РОССИЯ» по защите материнства, детства и поддержке семьи,
            сопредседатель МОО «Союз православных женщин»
          </div>
        </div>
      </div>
      <div
        className="flex h-max md:h-[378px] flex-col md:flex-row items-center justify-start
        gap-[40px] md:gap-[80px] mx-auto w-full"
        style={{ flexShrink: 0 }}
      >
        <img src="/Expert2.png" alt="one" className="w-[300px]  h-[378px]" />
        <div className=" md:h-[378px] flex justify-center gap-6 flex-col flex-shrink-1 flex-grow-0 items-center md:items-start w-5/6 md:w-full">
          <div className="text-black text-[40px] font-bold font-['Golos'] leading-[48px]">
            Примаков Евгений Александрович
          </div>
          <div className=" text-black text-lg font-medium font-['Golos'] leading-normal">
            руководитель Федерального агентства по делам СНГ, соотечественников,
            проживающих за рубежом, и по международному гуманитарному
            сотрудничеству.
          </div>
        </div>
      </div>
      <div
        className="flex h-max md:h-[378px] flex-col md:flex-row items-center justify-start
          gap-[40px] md:gap-[80px] mx-auto w-full"
        style={{ flexShrink: 0 }}
      >
        <img src="/Expert3.png" alt="one" className="w-[300px]  h-[378px]" />
        <div className=" md:h-[378px] flex justify-center gap-6 flex-col flex-shrink-1 flex-grow-0 items-center md:items-start w-5/6 md:w-full">
          <div className="text-black text-[40px] font-bold font-['Golos'] leading-[48px]">
            Лукьянов Федор Анатольевич
          </div>
          <div className=" text-black text-lg font-medium font-['Golos'] leading-normal">
            иерей, Председатель Патриаршей комиссии по вопросам семьи, защиты
            материнства и детства
          </div>
        </div>
      </div>
      <div
        className="flex h-max md:h-[378px] flex-col md:flex-row items-center justify-start
        gap-[40px] md:gap-[80px] mx-auto w-full"
        style={{ flexShrink: 0 }}
      >
        <img src="/Expert4.png" alt="one" className="w-[300px]  h-[378px]" />
        <div className=" md:h-[378px] flex justify-center gap-6 flex-col flex-shrink-1 flex-grow-0 items-center md:items-start w-5/6 md:w-full">
          <div className="text-black text-[40px] font-bold font-['Golos'] leading-[48px]">
            Антоний, митрополит Волоколамский
          </div>
          <div className=" text-black text-lg font-medium font-['Golos'] leading-normal">
            викарий Святейшего Патриарха Московского и всея Руси (Севрюк Антон
            Юрьевич)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
