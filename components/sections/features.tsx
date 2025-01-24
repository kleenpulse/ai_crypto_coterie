"use client";

import Image from "next/image";
import React, { useRef } from "react";
import BlurImage from "../miscellaneous/blur-image";
import useInView from "@/hooks/util-hooks/useInView";
import { FEATURES } from "@/lib/constants";
import { AnimatedCard } from "../cards/animated-card";

export const Features = () => {
	const listinTitleRef = useRef<HTMLHeadingElement>(null);
	const listinTitleInView = useInView({
		ref: listinTitleRef,
		once: true,
	});

	return (
		<div className="w-full flex flex-col gap-y-10 md:gap-y-20 px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 py-10 md:pb-16 md:pt-20 items-center relative z-50 bg-[linear-gradient(0deg,#516ACA_55%,rgba(82,107,202,0.00)_100%)]   -mt-20 lg:-mt-32">
			<div
				ref={listinTitleRef}
				style={{
					transform: listinTitleInView ? "none" : "translateY(100px)",
					opacity: listinTitleInView ? 1 : 0,
					transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
				}}
				className="flex w-full justify-center items-center px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12  py-10 gap-x-4 xl:gap-x-8"
			>
				{FEATURES.map((feature, index) => (
					<AnimatedCard key={index} data={feature} index={index} />
				))}
			</div>
		</div>
	);
};
