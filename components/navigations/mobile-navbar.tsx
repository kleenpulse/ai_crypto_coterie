/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { scroller } from "react-scroll";
import { usePathname } from "next/navigation";
import { CgArrowTopRight } from "react-icons/cg";
import { useNavState } from "@/hooks/use-nav-state";
import { useHeroInView } from "@/hooks/use-hero-inview";
import useWindowHeight from "@/hooks/util-hooks/use-window-height";

export default function MobileNav() {
	const [open, setOpen] = useState(false);
	const [scope, animate] = useAnimate();
	const { setActiveLink, activeLink, hideNavbar, setHideNavbar } =
		useNavState();
	const { isHeroInView } = useHeroInView();
	const { scrollY } = useWindowHeight();

	const pathname = usePathname();

	const handleLinkClick = (link: string) => {
		setActiveLink(link);

		const linkEl = document.getElementById(link);
		if (linkEl) {
			scroller.scrollTo(link, {
				duration: 1500,
				delay: 100,
				smooth: "easeInOutCubic",
				isDynamic: true,
				offset: -40,
			});
		}
	};
	// the stagger effect
	const staggerList = stagger(0.1, { startDelay: 0.25 });

	// create the animations that will be applied
	// whenever the open state is toggled

	useEffect(() => {
		animate(
			"ul",
			{
				width: open ? 180 : 0,
				height: open ? 200 : 0,
				opacity: open ? 1 : 0,
			},
			{
				type: "spring",
				bounce: 0,
				duration: 0.4,
			}
		);
		animate(
			"li",
			open
				? { opacity: 1, scale: 1, x: 0 }
				: { opacity: 0, scale: 0.3, x: -50 },
			{
				duration: 0.2,
				delay: open ? staggerList : 0,
			}
		);
	}, [open]);

	return (
		<>
			<div
				aria-hidden
				className={cn(
					"fixed left-0 top-0 z-[99] min-h-screen w-full bg-black/5 transition-all",
					open
						? "opacity-100 duration-500"
						: "pointer-events-none opacity-0 duration-300"
				)}
				onClick={() => {
					setOpen(false);
				}}
			/>

			<div className="relative z-[999] md:hidden" ref={scope}>
				<div className="home__header-mobile mt-3x overflow-hidden sm:mt-0">
					<motion.button
						id="menu-button"
						className={cn(" flex flex-col justify-center gap-y-[3px] py-0.5")}
						onClick={() => setOpen(!open)}
						whileTap={{ scale: 0.95 }}
						data-menu-open={open}
					>
						{[1, 2, 3].map((num) => (
							<span key={num} />
						))}
					</motion.button>
				</div>
				<ul
					className="absolute right-0 top-10 overflow-hidden pl-4 pt-1"
					data-menu-ul
				>
					{NAV_LINKS.map((link, index) => (
						<motion.li key={index}>
							<button
								key={link.link}
								onClick={() => {
									handleLinkClick(link.link);
									setOpen(false);
								}}
								className={cn(
									"relative w-fit text-sm font-medium text-white transition-colors duration-300 hover:text-accent-main",
									{
										"text-accent-main": activeLink === link.link,
									}
								)}
							>
								{link.name}
								<span
									tabIndex={-1}
									aria-hidden
									className={cn(
										"absolute -bottom-2 left-1/2 h-[2px] w-full -translate-x-1/2 translate-y-2 transform rounded-tl-lg rounded-tr-lg border-none bg-white opacity-0 outline-none transition-all duration-300 md:w-[120%]",
										{
											"translate-y-0 opacity-100":
												activeLink === link.link || pathname === link.link,
										}
									)}
								/>
							</button>
						</motion.li>
					))}
				</ul>
			</div>
		</>
	);
}
