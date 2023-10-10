import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

import TestModal from "./TestModal";

const TestEarth = () => {
	const MAX_GLOBE_SIZE = 1700;
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const globeRef = useRef(null);

  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: -3000, y: -1000 });

  const [size, setSize] = useState(getInitialSize);
	
  useEffect(() => {
    function handleResize() {
      setPointOfView();
    }

    window.addEventListener("resize", handleResize);
    setPointOfView(); // Установите pointOfView при монтировании

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив зависимостей, чтобы хук запускался при монтировании и размонтировании

  function setPointOfView() {
    if (!globeRef.current) {
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches; // или используйте другой брейкпойнт
    const altitude = isMobile ? 1.4 : 2.5;
    globeRef.current.pointOfView({ altitude });
  }
  useEffect(() => {
    const handleResize = () => {
      const newSize = getContainerSize();
      setSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // увеличиваем высоту на 10%

	function getInitialSize() {
		let width = containerRef.current ? containerRef.current.offsetWidth : window.innerWidth;
	
		if (width > MAX_GLOBE_SIZE) {
			width = MAX_GLOBE_SIZE;
		}
	
		return width;
	}

	function getContainerSize() {
		let width = containerRef.current.offsetWidth;
	
		if (width > MAX_GLOBE_SIZE) {
			width = MAX_GLOBE_SIZE; 
		}
	
		return width;
	}
  const markers = [
    {
      lat: 58.7516,
      lng: 48.6172,
      title: "Российская Федерация",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/ru.png",
    }, // Moscow
    {
      lat: 57.0135,
      lng: 36.1319,
      title: "Республика Беларусь",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/by.png",
    }, //belarus
    {
      lat: 46.8,
      lng: 24.5,
      title: "Республика Сербия",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/rs.png",
    }, // Serbia
    {
      lat: 38.1856,
      lng: 38.3823,
      title: "Республика Кипр",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/cy.png",
    }, // Cyprus
    {
      lat: 30.0334,
      lng: 33.2336,
      title: "Арабская Республика Египет",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/eg.png",
    }, // Egypt
    {
      lat: 44.3111,
      lng: 72.2406,
      title: "Республика Узбекистан",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/uz.png",
    }, // Uzbekistan
    {
      lat: 36.5138,
      lng: 45.2765,
      title: "Сирийская Арабская Республика",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/sy.png",
    }, //Syria
    {
      lat: 34.8886,
      lng: 40.4955,
      title: "Ливанская Республика",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/lb.png",
    }, //Lebanon
    {
      lat: 43.8782,
      lng: 81.6014,
      title: "Киргизская Республика",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/kg.png",
    }, //Kyrgyzstan
    {
      lat: 44.1776,
      lng: 51.5126,
      title: "Республика Армения",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/am.png",
    }, //Armenia
    {
      lat: 47.0025,
      lng: 46.0156,
      title: "Республика Абхазия",
      content:
        "Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. ",
      flag: "/ab.png",
    }, //Abkhazia
  ];

  useEffect(() => {
    let lastIntersected = null;
    if (!globeRef.current) return;

    const globe = globeRef.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = -0.1;
    globe.controls().enableZoom = false;
    const ambientLight = new THREE.AmbientLight(0xffffff); // setting white light
    ambientLight.intensity = 0; // setting light intensity
    const controls = globe.controls();

    // // Установите min и max полярные углы, чтобы ограничить вращение вокруг оси Y
    // controls.minPolarAngle = 70 * (Math.PI / 180); // преобразование градусов в радианы
    // controls.maxPolarAngle = 70 * (Math.PI / 180); // преобразование градусов в радианы// ограничьте вращение, измените значения в соответствии с вашими нуждами

    // Обновите controls после изменения свойств
    controls.update();
    globe.scene().add(ambientLight);
    const loader = new THREE.TextureLoader();
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const sprites = [];
    const handleMarkerHover = (markerData) => {
      console.log("handleMarkerHover called with data:", markerData); // Добавьте лог
      setHoveredMarker(markerData);
    };

    const handleMarkerLeave = () => {
      console.log("handleMarkerLeave called");
      setHoveredMarker(null);
      setModalPosition({ x: -2000, y: -2000 }); // перемещаем окно вне видимой области или устанавливаем флаг isVisible для его скрытия
    };
    loader.load("/rinnegan.png", function (texture) {
      markers.forEach((marker) => {
        const material = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(material);

        const lat = marker.lat;
        const lon = marker.lng;
        const radius = 100; // Adjust as needed
        const position = new THREE.Vector3();
        position.setFromSphericalCoords(
          radius,
          Math.PI / 2 - THREE.MathUtils.degToRad(lat),
          THREE.MathUtils.degToRad(lon)
        );

        sprite.position.set(position.x, position.y, position.z + 10);
        sprite.scale.set(10, 10, 15);
        sprite.userData = marker;
        globe.scene().add(sprite);
        sprites.push(sprite);
      });
    });
    const onMouseMove = (event) => {
      event.preventDefault();
      if (!containerRef.current) return;

      const boundingRect = containerRef.current.getBoundingClientRect();
      mouse.x =
        ((event.clientX - boundingRect.left) / boundingRect.width) * 2 - 1;
      mouse.y =
        -((event.clientY - boundingRect.top) / boundingRect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, globe.camera());
      const intersects = raycaster.intersectObjects(sprites);
      sprites.forEach((sprite) => sprite.scale.set(10, 10, 15));

      console.log("Mouse Move - Intersects Length:", intersects.length); // Добавленный лог

      if (intersects.length > 0) {
        const intersectedSprite = intersects[0].object;
        intersectedSprite.scale.set(15, 15, 15);
        const vector = intersectedSprite.position.clone();
        vector.project(globe.camera());
        const rect = containerRef.current.getBoundingClientRect();
        const x = rect.left + (vector.x * 0.5 + 0.5) * rect.width;
        const y = rect.top + (-vector.y * 0.5 + 0.5) * rect.height;
        if (lastIntersected !== intersectedSprite) {
          lastIntersected = intersectedSprite;
          handleMarkerHover(intersectedSprite.userData);
        }
        setModalPosition({ x, y });
      } else {
        if (lastIntersected) {
          lastIntersected = null;
          handleMarkerLeave();
        }
      }
    };
    const onMouseClick = (event) => {
      event.preventDefault();

      if (!containerRef.current) return;

      const boundingRect = containerRef.current.getBoundingClientRect();
      mouse.x =
        ((event.clientX - boundingRect.left) / boundingRect.width) * 2 - 1;
      mouse.y =
        -((event.clientY - boundingRect.top) / boundingRect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, globe.camera());
      const intersects = raycaster.intersectObjects(sprites);

      if (intersects.length > 0) {
        const intersectedSprite = intersects[0].object;

        // Now navigate based on the userData of the intersectedSprite
        navigate(`/russia`);
      }
    };

    window.addEventListener("click", onMouseClick);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onMouseClick);
    };
  }, []);
  useEffect(() => {
    console.log("hoveredMarker changed: ", hoveredMarker);
  }, [hoveredMarker]);
  console.log("hoveredMarker:", hoveredMarker);
  return (
    <div>
      <h1 className="text-center text-red text-5xl md:text-6xl font-bold leading-3xl md:leading-[72px] hidden md:block">
        Страны - участницы
      </h1>
      <h1 className="text-center text-red text-4xl md:text-6xl font-bold leading-3xl mb-8 md:leading-[72px] block md:hidden">
        Страны -<br />
        участницы
      </h1>
      <div
        ref={containerRef}
        className="bg-cover bg-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/MapBackground.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Globe
          className="static"
          ref={globeRef}
          width={size}
          height={size}
          globeImageUrl="/planet.png"
          backgroundColor="rgba(0, 0, 0, 0)"
          atmosphereColor="rgba(0, 0, 0, 0)"
          showAtmosphere={false}
        />
      </div>
      <TestModal
        x={modalPosition.x}
        y={modalPosition.y}
        markerData={hoveredMarker}
      />
    </div>
  );
};

export default TestEarth;
