/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef } from "react";
import Button from "../ui/button";
import { useHeroInView } from "@/hooks/use-hero-inview";
import useInView from "@/hooks/util-hooks/useInView";
import { LuPlus } from "react-icons/lu";
import { ContainerScrollAnimation } from "../miscellaneous/container-scroll-animation";
import Image from "next/image";

const HeroSection = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const showDogsRef = useRef<HTMLDivElement>(null);
	const { updateHeroInView } = useHeroInView();

	const isHeroInView = useInView({ ref: heroRef, once: false });

	useEffect(() => {
		if (isHeroInView) {
			updateHeroInView(true);
		} else {
			updateHeroInView(false);
		}
	}, [isHeroInView]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="w-full relative max-h-[700px] md:max-h-[800px] lg:max-h-[1200px] min-h-screen flex justify-center pt-32 sm:pt-24 md:pt-32  min-[1440px]:pt-40  overflow-x-clip  bg-gradient-to-b from-primary to-[#2B49BB] to-90% z-20">
			<div
				id="hero__ref"
				ref={heroRef}
				className="w-full absolute top-10  h-10 bg-transparent z-10 pointer-events-none"
			/>

			<div className="flex flex-col gap-y-8  items-center relative z-10 w-full">
				<div className="text-white relative z-20 w-full md:min-h-[100px] flex flex-col items-center gap-y-4 max-w-[780px]">
					<h1
						id="hero__title"
						className="font-helveticaBold font-bold text-2xl md:text-4xl lg:text-6xl text-center"
					>
						Your AI-Powered Crypto Analysis Companion
					</h1>
					<p className="text-white md:text-xl  lg:px-20 text-center font-helvetica-regular font-light">
						Analyze contract addresses, track sentiment trends, and stay ahead
						in the crypto market.
					</p>
				</div>

				<div
					ref={showDogsRef}
					className="flex items-center gap-x-4 mt-2 flex-col sm:flex-row justify-center gap-y-6 relative w-full z-50"
				>
					<Button className="w-fit  flex  items-center gap-x-2 lg:gap-x-4 font-medium border border-gray-300 rounded-full justify-baseline">
						<span>Add to Server</span>
						<LuPlus />
					</Button>
					<Button className="w-fit  flex  items-center  font-bold border border-gray-300 rounded-full justify-baseline bg-accent-yellow text-black ">
						<span>Join Community</span>
					</Button>
				</div>
				<div className="flex w-full justify-center relative ">
					<div className="absolute left-0 top-0 size-[500px]">
						<Image
							src="/home/left-ribbon.png"
							width={500}
							height={500}
							alt="Decorative left ribbon"
							className="relative z-10 left-0 opacity-0"
						/>
					</div>
					<ContainerScrollAnimation />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
