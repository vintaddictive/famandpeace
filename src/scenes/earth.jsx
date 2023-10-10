// // import React, { Suspense, useRef } from "react";
// // import { Canvas, useFrame } from "@react-three/fiber";
// // import * as THREE from "three";
// // import { OrbitControls, Preload, Sphere, useGLTF, Loader } from "@react-three/drei";
// // import earthImg from "../MapChart_Map.png";
// // import { motion } from "framer-motion";

// const Marker = ({ position, image }) => {
// 	return (
// 		<mesh position={position}>
// 			<sphereGeometry />

// 			<meshBasicMaterial>
// 				<meshBasicMaterial map={image} />
// 				<motion.div
// 					className="bg-red-500 rounded-full border-white border-2 w-5 h-5"
// 					animate={{ scale: [0, 1] }}
// 					transition={{ duration: 0.5 }}
// 				/>
// 			</meshBasicMaterial>
// 		</mesh>
// 	);
// };

// const labels = [
// 	{
// 		x: 0,
// 		y: 0,
// 		z: 300,
// 		name: "Москва",
// 		text: "Москва - столица России",
// 		image: "/rinnegan.svg",
// 	},
// 	{
// 		x: 1,
// 		y: 0,
// 		z: 0,
// 		name: "Санкт-Петербург",
// 		text: "Санкт-Петербург - второй по величине город России",
// 		image: "/rinnegan.svg",
// 	},
// ];

// const Earth = () => {
// 	const base = new THREE.TextureLoader().load(earthImg);
// 	const ref = useRef();
// 	useFrame(() => {
// 		ref.current.rotation.x = 0.0001;
// 		ref.current.rotation.y += 0.0001;
// 	});

// 	return (
// 		<mesh visible castShadow ref={ref}>
// 			<directionalLight intensity={0.5} />

// 			<sphereGeometry attach="geometry" args={[2, 32, 32]} />
// 			<meshBasicMaterial map={base} color="white" />
// 		</mesh>
// 	);
// };

// const EarthCanvas = () => {
// 	return (
// 		<Canvas
// 			shadows
// 			frameloop="demand"
// 			dpr={[1, 2]}
// 			gl={{ preserveDrawingBuffer: true }}
// 			camera={{
// 				fov: 45,
// 				near: 0.1,
// 				far: 200,
// 				position: [-4, 3, 6],
// 			}}
// 		>
// 			<Suspense fallback={null}>
// 				<OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
// 				<Earth />

// 				<Preload all />
// 			</Suspense>

// 			{labels.map((label) => {
// 				return (
// 					<Marker
// 						position={[label.x, label.y, label.z]}
// 						image={new THREE.TextureLoader().load(label.image)}
// 						key={label.name}
// 					/>
// 				);
// 			})}
// 		</Canvas>
// 	);
// };

// export default EarthCanvas