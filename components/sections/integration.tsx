"use client";

import Image from "next/image";
import React, { useRef } from "react";
import BlurImage from "../miscellaneous/blur-image";
import { INTEGRATION } from "@/lib/constants";
import HowToCard, { IntegrationCard } from "../cards/integration-card";
import useInView from "@/hooks/util-hooks/useInView";
import Button from "../ui/button";
import { LuPlus } from "react-icons/lu";

export const Integration = () => {
	const howtoTitle = useRef<HTMLDivElement>(null);
	const sandorRef = useRef<HTMLDivElement>(null);
	const sandorInView = useInView({
		ref: sandorRef,
		once: true,
	});
	const howtoTitleInView = useInView({
		ref: howtoTitle,
		once: true,
	});

	return (
		<div className="w-full flex flex-col gap-y-10 px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 py-10 md:pb-20 xl:pb-44 md:pt-20 items-center relative z-20   pb-20">
			<div
				ref={howtoTitle}
				style={{
					transform: howtoTitleInView ? "none" : "translateY(100px)",
					opacity: howtoTitleInView ? 1 : 0,
					transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
				}}
				id="integration"
				className="flex flex-col gap-y-3 w-full justify-center items-center px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 overflow-y-clip  text-white"
			>
				<b className="font-helvetica-bold text-lg">Integration</b>
				<h2 className="font-helvetica-bold text-2xl md:text-4xl lg:text-5xl text-center">
					Simple Integration Guide
				</h2>
				<p className="text-center max-w-[800px] lg:text-xl font-light">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, ab.
				</p>
			</div>
			<div className="w-full flex flex-col-reverse max-[900px]:items-center min-[900px]:flex-row justify-center  gap-x-10 gap-y-16">
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3">
					<div
						style={{
							transform: howtoTitleInView ? "none" : "translateY(100px)",
							opacity: howtoTitleInView ? 1 : 0,
							transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
						}}
						className="w-full max-w-[280px] xl:max-w-[300px] relative flex flex-col justify-center items-center gap-y-3	 font-roboto  text-xs sm:text-sm md:text-base h-[232px] border border-yellow-300 rounded-xl p-3 bg-accent-yellow backdrop-blur-md"
					>
						<Button className="w-fit  flex  items-center gap-x-2 lg:gap-x-4 font-medium bg-black rounded-full justify-baseline">
							<span>Add to Server</span>
							<LuPlus />
						</Button>
					</div>
					{INTEGRATION.map((item, index) => (
						<IntegrationCard key={item.id} {...item} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};
