/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect } from "react";
import { scroller } from "react-scroll";
import useWindowHeight from "@/hooks/util-hooks/use-window-height";
import { useNavState } from "@/hooks/use-nav-state";
import { useHeroInView } from "@/hooks/use-hero-inview";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { NavStateProps } from "@/types/nav-states.types";
import MobileNav from "./mobile-navbar";
import Image from "next/image";

export default function HomeNavbar() {
	const { setActiveLink, activeLink, hideNavbar, setHideNavbar } =
		useNavState();
	const { isHeroInView } = useHeroInView();
	const { scrollY } = useWindowHeight();

	useEffect(() => {
		if (isHeroInView) {
			setActiveLink("home");
			return;
		}
	}, [isHeroInView]);

	useEffect(() => {
		let prevScrollpos = scrollY;
		// console.log("PREV", prevScrollpos);
		window.onscroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollpos >= currentScrollPos) {
				setHideNavbar(false);
				// setOpenNavbar(false);
			} else {
				// setOpenNavbar(false);
				setHideNavbar(true);
			}
			prevScrollpos = currentScrollPos;
		};
	}, [scrollY]);

	const handleLinkClick = (link: NavStateProps["activeLink"]) => {
		setActiveLink(link);

		const linkEl = document.getElementById(link);
		if (linkEl) {
			scroller.scrollTo(link, {
				duration: 1500,
				delay: 100,
				smooth: "easeInOutCubic",
				isDynamic: true,
				offset: -70,
			});
		}
	};

	return (
		<nav
			className={cn(
				"fixed left-1/2 z-[100] flex w-full md:max-w-[90%] -translate-x-1/2 transform-gpu items-center rounded-full md:border border-white/15 px-3 py-2 transition-all duration-300 sm:px-5  xl:max-w-[1217px] font-inter",
				isHeroInView
					? "top-2 md:top-5 border-white/5 md:bg-white/10"
					: "top-2 border-white/25 bg-primary/20 md:bg-white/15 backdrop-blur-md",
				hideNavbar ? "-translate-y-[150px]" : "translate-y-0"
			)}
		>
			<div className="w-full overflow-hidden">
				<div className=" flex w-full items-center gap-4 sm:justify-between">
					<button
						className={cn(" flex items-center gap-x-1")}
						onClick={() => {
							scroller.scrollTo("hero__ref", {
								duration: 1500,
								delay: 100,
								smooth: "easeInOutCubic",
								isDynamic: true,
							});
						}}
					>
						<Image src="/home/logo.png" width={40} height={40} alt="" />
						<span className="font-semibold text-white sm:text-2xl lg:text-3xl font-inter block md:hidden min-[900px]:block">
							Coterie
						</span>
					</button>
					<div
						className={cn(
							" hidden items-center md:flex md:gap-x-7 lg:gap-x-10 xl:gap-x-16"
						)}
					>
						{NAV_LINKS.map((link) => (
							<button
								key={link.link}
								onClick={() => handleLinkClick(link.link)}
								className={cn(
									"relative w-fit whitespace-nowrap text-neutral-100 transition-colors duration-300 hover:text-accent-main font-inter font-light text-sm min-[900px]:text-base",
									{
										"text-white font-medium": activeLink === link.link,
									}
								)}
							>
								<span>{link.name}</span>
							</button>
						))}
					</div>

					<button className="hidden md:block text-black bg-white font-bold text-sm px-5 py-3 rounded-full">
						Add to Server
					</button>
				</div>
			</div>

			<MobileNav />
		</nav>
	);
}
