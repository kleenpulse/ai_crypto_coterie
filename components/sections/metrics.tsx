"use client";

import { useEffect, useRef, useState } from "react";
import { INTEGRATION, METRICS } from "@/lib/constants";
import useInView from "@/hooks/util-hooks/useInView";
import { HowItWorksCard } from "../cards/how-it-works-card";

export const Metrics = () => {
	const metrics = useRef<HTMLDivElement>(null);

	const metricsInView = useInView({
		ref: metrics,
		once: true,
	});

	return (
		<div className="w-full flex flex-col gap-y-10 px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 py-10 md:pb-20 xl:pb-44 md:pt-20 items-center relative z-20   pb-20">
			<div
				ref={metrics}
				style={{
					transform: metricsInView ? "none" : "translateY(100px)",
					opacity: metricsInView ? 1 : 0,
					transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
				}}
				id="features"
				className="flex flex-col gap-y-3 w-full justify-center items-center px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 overflow-y-clip  text-white max-w-[600px]"
			>
				<b className="font-helvetica-bold text-lg">Features</b>
				<h2 className="font-helvetica-bold text-2xl md:text-4xl lg:text-5xl text-center">
					Scanning Metrics
				</h2>
				<p className="text-center max-w-[800px] lg:text-xl font-light">
					Discover sentiment with metrics like
				</p>
			</div>
			<div className="w-full flex  justify-center  overflow-y-clip">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white bg-white/20 p-8 rounded-xl">
					{METRICS.map((metric) => (
						<div
							key={metric.id}
							className="flex flex-col gap-y-4 max-w-[180px] lg:max-w-[250px] items-center"
						>
							<CircularProgress
								percentage={metric.percentage}
								color={metric.color}
								metricsInView={metricsInView}
							/>

							<p className="text-sm lg:text-lg text-center text-gray-200 font-light">
								{metric.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const CircularProgress = ({
	percentage,
	color,
	metricsInView,
}: {
	percentage: number;
	color: string;
	metricsInView: boolean;
}) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (!metricsInView) return;
		const timer = setTimeout(() => setProgress(percentage), 100);
		return () => clearTimeout(timer);
	}, [percentage, metricsInView]);

	return (
		<div className="relative size-32 lg:size-44">
			<svg className="w-full h-full" viewBox="0 0 100 100">
				{/* Background circle */}
				<circle
					className="text-white/10"
					strokeWidth="12"
					stroke="currentColor"
					fill="transparent"
					r="44"
					cx="50"
					cy="50"
				/>
				{/* Progress circle */}
				<circle
					className="text-blue-500 transition-all duration-1000 ease-out"
					strokeWidth="12"
					strokeDasharray={44 * 2 * Math.PI}
					strokeDashoffset={44 * 2 * Math.PI * ((100 - progress) / 100)}
					strokeLinecap="round"
					stroke={color}
					fill="transparent"
					r="44"
					cx="50"
					cy="50"
					style={{
						transformOrigin: "50% 50%",
						transform: "rotate(-90deg)",
						transition: "stroke-dashoffset 1s ease-out",
					}}
				/>
			</svg>
			<div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
				{progress}%
			</div>
		</div>
	);
};
