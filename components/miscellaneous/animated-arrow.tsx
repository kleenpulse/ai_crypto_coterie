"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useArrow } from "@/hooks/use-arrow";

export default function AnimatedArrow({ className }: { className?: string }) {
	const isAnimated = useArrow((state) => state.isAnimated);
	const pathRef = useRef<SVGPathElement>(null);
	const controls = useAnimation();

	useEffect(() => {
		if (pathRef.current) {
			const length = pathRef.current.getTotalLength();
			controls.set({
				strokeDasharray: length,
				strokeDashoffset: length,
			});
		}
	}, [controls]);

	useEffect(() => {
		if (isAnimated) {
			controls.start({
				strokeDashoffset: 0,
				transition: { duration: 2, ease: "easeInOut" },
			});
		} else {
			controls.start({
				strokeDashoffset: pathRef.current
					? pathRef.current.getTotalLength()
					: 0,
				transition: { duration: 0.5, ease: "easeInOut" },
			});
		}
	}, [isAnimated, controls]);

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="94"
			height="49"
			viewBox="0 0 94 49"
			fill="none"
			className={className}
		>
			<motion.path
				ref={pathRef}
				d="M93.4844 36.5416C94.0685 35.8266 93.9624 34.7735 93.2474 34.1895L81.5963 24.6717C80.8814 24.0876 79.8283 24.1938 79.2442 24.9087C78.6602 25.6237 78.7663 26.6768 79.4813 27.2608L89.8378 35.7211L81.3775 46.0776C80.7935 46.7925 80.8996 47.8456 81.6146 48.4296C82.3295 49.0137 83.3826 48.9076 83.9667 48.1926L93.4844 36.5416ZM0.946176 2.15823L4.8641 11.2184L7.93269 9.89147L4.01476 0.831273L0.946176 2.15823ZM55.3538 40.8763L92.3575 37.1472L92.0223 33.8208L55.0186 37.5499L55.3538 40.8763ZM4.8641 11.2184C13.4382 31.0459 33.8607 43.0422 55.3538 40.8763L55.0186 37.5499C34.9745 39.5698 15.9287 28.3823 7.93269 9.89147L4.8641 11.2184Z"
				stroke="white"
				strokeWidth="2"
				fill="currentColor"
				animate={controls}
			/>
		</svg>
	);
}
