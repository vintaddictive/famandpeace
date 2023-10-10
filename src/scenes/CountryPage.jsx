import Errors from "./SmComponents/Oshibka";
import Footer from "./Footer";
import React from 'react'
import { Link } from "react-router-dom";

const CountryPage = () => {
	return (
		<div className="h-full md:h-screen bg-white w-full">
			<div className="bg-white h-[100px] md:h-[250px] w-full"></div>
			<div className=" flex flex-col gap-[35px] justify-center items-center sm:flex-row">
					<img src="/gear.svg" alt="gear" />
					<div className="bg-white flex flex-col items-start gap-8"> 
	<h1 className="text-red
	text-4xl
md:text-6xl
font-bold
font-['Golos']
leading-10">Страница на стадии наполнения</h1>
<h2 className="text-neutral-800
text-lg
font-semibold
font-['Golos']
leading-normal">Данная страница находится на стадии наполнения и станет доступна в ближайшее время</h2>
            <Link
              to="/"
              className="mb-[40px] px-[38px] py-[11px] xs:px-12 xs:py-[18px] text-base leading-tight shadow-[-1px_1px_11px_6px_rgba(212,18,22,0.24)] hover:shadow-[-1px_1px_11px_6px_rgba(55,113,183,0.24)]  font-semibold bg-gradient-rainred rounded-[15px] xs:rounded-[24px]  brightness-100  justify-center  gap-2.5 inline-flex text-neutral-100 xs:text-[24px] xs:font-semibold xs:leading-7  transition ease-in-out hover:-translate-y-1 hover:bg-gradient-rainbow hover:delay-50 duration-100"
            >
              На главную
            </Link>
</div>
			</div>
			<div className="hidden sm:block">
			<Footer />
			</div>
		</div>
	)
}

export default CountryPage