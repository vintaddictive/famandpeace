// Импортируем библиотеку 
import Slider from "react-slick";
import { useState, useRef } from "react";
import img1 from "../assets/logowomen.png"
import img2 from "../assets/logovrns.png"
import img3 from "../assets/logobears.png"
import img4 from "../assets/logogolus.png"

const ImageSlider = ({images}) => {

  const [activeSlide, setActiveSlide] = useState(0);

	const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setActiveSlide(current)
		
  };
	function Slide({img}) {
		return (
			<div>
				<img src={img} />
			</div>
		) 
	}
  return (
    <div className="slider">
      
			<Slider {...settings}>
  {images.map(img => <Slide img={img} />)} 
</Slider>
			{sliderRef.current?.slider?.getErrors()?.map(err => 
        console.error(err)
      )}
      <div className="arrows">
      
        <button onClick={() => sliderRef.current.slickPrev()}>  
          Prev
        </button>
      
        <button onClick={() => sliderRef.current.slickNext()}>
         Next
        </button>
      
      </div>

    </div>
  );
}

// Использование 
const images = [
	img1,
	img2,
	img3,
	img4

];
// Вывод в консоль
console.log(images); 

// Проверка типа
console.log(Array.isArray(images));
<ImageSlider images={images} />
export default ImageSlider;