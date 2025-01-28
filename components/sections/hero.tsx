/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../ui/button";
import { useHeroInView } from "@/hooks/use-hero-inview";
import useInView from "@/hooks/util-hooks/useInView";
import { LuPlus } from "react-icons/lu";
import { ContainerScrollAnimation } from "../miscellaneous/container-scroll-animation";
import Image from "next/image";
import BlurImage from "../miscellaneous/blur-image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroSection = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const gsapRef = useRef<HTMLDivElement>(null);
	const showDogsRef = useRef<HTMLDivElement>(null);
	const { updateHeroInView } = useHeroInView();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useGSAP(
		() => {
			if (!isClient) return;
			if (!gsapRef.current) return;
			gsap.registerPlugin(ScrollTrigger);
			const rightImage1 = document.querySelector("[data-image-right-1='true']");
			const rightImage2 = document.querySelector("[data-image-right-2='true']");
			const leftImage1 = document.querySelector("[data-image-left-1='true']");
			const bigRibbon1 = document.querySelector("[data-big-ribbon-1='true']");
			const bigRibbon2 = document.querySelector("[data-big-ribbon-2='true']");

			const scrollTL = gsap.timeline({
				scrollTrigger: {
					trigger: gsapRef.current,
					start: "top top",
					end: "+=400",
					scrub: 1,

					// markers: true,
				},
			});

			scrollTL.fromTo(
				rightImage1,
				{
					x: 0,
					rotateZ: 8,
				},
				{
					x: -120,
					rotateZ: 90,
				},
				"<"
			);

			scrollTL.fromTo(
				rightImage2,
				{
					x: 0,
					rotateZ: 8,
					delay: 0.1,
				},
				{
					x: -100,
					delay: 0.1,
					rotateZ: 120,
				},
				"<"
			);
			scrollTL.fromTo(
				leftImage1,
				{
					x: 0,
					rotateZ: -8,
				},
				{
					x: 120,
					rotateZ: 90,
				},
				"<"
			);
			scrollTL.fromTo(
				bigRibbon1,
				{
					x: 0,
					opacity: 1,
					delay: 0.1,
				},
				{
					x: -80,
					opacity: 0,
					delay: 0.1,
				},
				"<"
			);
			scrollTL.fromTo(
				bigRibbon2,
				{
					x: 0,
					opacity: 1,
				},
				{
					x: 80,
					opacity: 0,
				},
				"<"
			);
		},
		{ scope: gsapRef, dependencies: [isClient, gsapRef.current] }
	);
	const isHeroInView = useInView({ ref: heroRef, once: false });

	useEffect(() => {
		if (isHeroInView) {
			updateHeroInView(true);
		} else {
			updateHeroInView(false);
		}
	}, [isHeroInView]);
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
		<div
			ref={gsapRef}
			className="w-full  relative lg:max-h-[1200px] min-h-screenx flex justify-center pt-24  md:pt-32  xl:pt-40  overflow-x-clip  bg-gradient-to-b from-primary to-[#2B49BB] to-90% z-20"
		>
			<div
				id="hero__ref"
				ref={heroRef}
				className="w-full absolute top-10  h-10 bg-transparent z-10 pointer-events-none"
			/>

			<div className="flex flex-col gap-y-8  items-center relative z-10 w-full max-w-[1900px] mx-auto px-4x lg:px-0">
				<span
					data-image-right-1
					className="absolute -left-8 lg:left-20 xl:left-32 top-10"
				>
					<BlurImage src="/home/shield.png" width={47} height={47} alt="" />
				</span>
				<span
					data-image-right-2
					className="absolute left-32 xl:left-44 top-44 hidden lg:block"
				>
					<BlurImage src="/home/rope.png" width={60} height={60} alt="" />
				</span>
				<span
					data-image-left-1
					className="absolute right-0 lg:right-32 xl:right-44 lg:top-44 top-8"
				>
					<BlurImage
						src="/home/hammer.png"
						width={60}
						height={60}
						alt=""
						className="size-[40px] lg:size-[60px]"
					/>
				</span>
				<div className="text-white relative z-20 w-full md:min-h-[100px] flex flex-col md:items-center gap-y-4 min-[500px]:max-w-[450px] max-w-[350px] md:max-w-[580px] lg:max-w-[780px]">
					<h1
						id="hero__title"
						className="font-helveticaBold font-bold text-4xl md:text-4xl lg:text-6xl md:text-center"
					>
						Your AI-Powered Crypto Analysis Companion
					</h1>
					<p className="text-white text-sm md:text-xl  lg:px-20 md:text-center font-helvetica-regular font-light">
						Analyze contract addresses, track sentiment trends, and stay ahead
						in the crypto market.
					</p>
				</div>

				<div
					ref={showDogsRef}
					className="flex items-center gap-x-4 md:mt-2  justify-center gap-y-6 relative w-full z-50"
				>
					<Button className="w-fit  flex  items-center gap-x-2 lg:gap-x-4 font-medium border border-gray-300 rounded-full justify-baseline text-xs sm:text-sm md:text-base">
						<span>Add to Server</span>
						<LuPlus />
					</Button>
					<Button className="w-fit  flex  items-center  font-bold border border-gray-300 rounded-full justify-baseline bg-accent-yellow text-black  text-xs sm:text-sm md:text-base">
						<span>Join Community</span>
					</Button>
				</div>
				<div className="flex lg:hidden  rounded-xl items-center justify-center shrink-0z w-full relative min-h-[400px]  ">
					<BlurImage
						src="/home/dashboard-mobile.png"
						width={450}
						height={400}
						quality={100}
						alt="dashboard"
						className="object-coverx size-full max-w-full absolute right-[-1rem]"
						draggable={false}
					/>
				</div>
				<div className="hidden lg:flex w-full justify-center relative ">
					<div
						data-big-ribbon-1
						className="absolute left-0 top-[-6rem] left_ribbon  grayscale-100 brightness-200 "
					>
						<Image
							src="/home/left-ribbon.png"
							width={500}
							height={500}
							alt="Decorative left ribbon"
							className="relative z-10 left-0 opacity-40"
						/>
					</div>
					<ContainerScrollAnimation />
					<div
						data-big-ribbon-2
						className="absolute right-0 top-[-6rem] left_ribbon scale-x-[-1] scale-y-[1] grayscale-100 brightness-200 "
					>
						<Image
							src="/home/left-ribbon.png"
							width={500}
							height={500}
							alt="Decorative left ribbon"
							className="relative z-10 left-0 opacity-40"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
