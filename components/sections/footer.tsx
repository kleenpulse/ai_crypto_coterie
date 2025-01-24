"use client";

import { useNavState } from "@/hooks/use-nav-state";
import useInView from "@/hooks/util-hooks/useInView";
import { NAV_LINKS } from "@/lib/constants";
import { NavStateProps } from "@/types/nav-states.types";
import { useRef } from "react";
import { FaTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { scroller } from "react-scroll";

const Footer = () => {
	const { setActiveLink } = useNavState();
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
	const sandorRef = useRef<HTMLDivElement>(null);
	const sandorInView = useInView({
		ref: sandorRef,
		once: true,
	});
	return (
		<footer
			ref={sandorRef}
			style={{
				transform: sandorInView ? "none" : "translateY(100px)",
				opacity: sandorInView ? 1 : 0,
				transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
			}}
			className="w-full py-5 flex justify-between items-center relative z-20 text-white px-4 xl:px-10"
		>
			<p className="flex items-center gap-x-2">
				<b>© AI-Powered</b>
				<span>2025 all right reserved</span>
			</p>
			<div className="hidden lg:flex items-center gap-x-5 xl:gap-x-8">
				{NAV_LINKS.map((link) => (
					<button
						key={link.link}
						onClick={() => handleLinkClick(link.link)}
						className="relative w-fit whitespace-nowrap text-neutral-100 transition-colors duration-300 hover:text-accent-main font-inter font-light"
					>
						<span>{link.name}</span>
					</button>
				))}
			</div>
			<div className="flex items-center gap-x-2">
				<LuGithub size={16} />
				<FaTwitter size={16} />
			</div>
		</footer>
	);
};

export default Footer;
