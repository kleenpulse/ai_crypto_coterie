"use client";

import { useRef } from "react";
import { INTEGRATION } from "@/lib/constants";
import useInView from "@/hooks/util-hooks/useInView";
import { HowItWorksCard } from "../cards/how-it-works-card";

export const HowItWorks = () => {
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
				id="how-it-works"
				className="flex flex-col gap-y-3 w-full justify-center items-center px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 overflow-y-clip  text-white max-w-[600px]"
			>
				<b className="font-helvetica-bold text-lg">How It Works</b>
				<h2 className="font-helvetica-bold text-xl md:text-2xl lg:text-3xl text-center">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, ab.
				</h2>
			</div>

			<div className="overflow-x-auto w-full flex  gap-x-3 shrink-0 custom_scroll pb-3 min-[1900px]:justify-center h-full overflow-y-clip lg:pb-4 pl-16 sm:pl-0">
				{INTEGRATION.map((item, index) => (
					<HowItWorksCard key={item.id} {...item} index={index} />
				))}
			</div>
		</div>
	);
};
