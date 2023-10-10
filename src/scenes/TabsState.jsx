import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  function Slide({ img, kaka, text, text2 }) {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <img src={img} alt="slide" className="w-32 h-32 mb-4" />
        <div
          className="text-center leading-[16px]"
          style={{ maxWidth: "180px" }}
        >
          <span className="text-white text-xs font-normal font-Golos leading-[16px]">
            {kaka}
          </span>
          <span className="text-white text-xs font-bold font-Golos leading-[14px]">
            {text}
          </span>
          <span className="text-white text-xs font-normal font-Golos leading-[16px]">
            {text2}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-4/6 sm:w-5/6  ">
      <Slider {...settings} className="items-center justify-center">
        <Slide
          img="/logogolus.png"
          text="РОССОТРУДНИЧЕСТВО - "
          text2="Федеральное агентство по делам Содружества Независимых государств"
        />
        <Slide
          img="/logobears.png"
          text="Комиссия «Единой России» по защите материнства, детства и поддержке семьи "
        />
        <Slide
          img="/logovrns.png"
          text="Всемирный Русский Народный Собор -"
          text2="Международная общественная организация, основанная в мае 1993 года под эгидой Русской православной церкви."
        />
        <Slide
          img="/logowomen.png"
          kaka="Международная общественная органищация "
          text="«Союз православных женщин» "
          text2="флагман высокой публичной дипломатии среди женских организаций России"
        />

        {/* Добавьте остальные изображения по аналогии */}
      </Slider>
    </div>
  );
}
