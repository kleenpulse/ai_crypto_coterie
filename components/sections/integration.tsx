"use client";

import { useRef } from "react";
import { INTEGRATION } from "@/lib/constants";
import { IntegrationCard } from "../cards/integration-card";
import useInView from "@/hooks/util-hooks/useInView";
import Button from "../ui/button";
import { LuPlus } from "react-icons/lu";
import BlurImage from "../miscellaneous/blur-image";

export const Integration = () => {
	const integration = useRef<HTMLDivElement>(null);

	const integrationInView = useInView({
		ref: integration,
		once: true,
	});

	return (
		<div className="w-full flex flex-col gap-y-10 px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 py-10 md:pb-20 xl:pb-44 md:pt-20 items-center relative z-20   pb-20">
			<div
				ref={integration}
				style={{
					transform: integrationInView ? "none" : "translateY(100px)",
					opacity: integrationInView ? 1 : 0,
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
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 relative">
					<span className="absolute left-[-10rem] top-[-10rem] z-20 ">
						<BlurImage
							src="/integration/integration-ribbon.png"
							width={250}
							height={250}
							alt=""
							className="max-w-[250px] max-h-[250px] grayscale-100 brightness-[300%]  opacity-20"
						/>
					</span>
					<span className="absolute right-[-10rem] bottom-[-9rem] z-20 scale-x-[-1] scale-y-[-1]">
						<BlurImage
							src="/integration/integration-ribbon.png"
							width={250}
							height={250}
							alt=""
							className="max-w-[250px] max-h-[250px] grayscale-100 brightness-[300%]  opacity-20"
						/>
					</span>
					<div
						style={{
							transform: integrationInView ? "none" : "translateY(100px)",
							opacity: integrationInView ? 1 : 0,
							transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
						}}
						className="w-full max-w-[280px] xl:max-w-[300px] relative z-30 flex flex-col justify-center items-center gap-y-3	 font-roboto  text-xs sm:text-sm md:text-base  h-[150px] sm:h-[232px] border border-yellow-300 rounded-xl p-3 bg-accent-yellow backdrop-blur-md"
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
