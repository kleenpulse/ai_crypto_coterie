"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBlurBackground() {
	return (
		<div className="absolute inset-0 overflow-hidden">
			<div className="relative w-full h-full">
				<motion.div
					className="absolute top-[20%] right-1/4 w-[60vw] xl:w-[50vw] h-full max-h-[80vh] rounded-full bg-[rgba(0,186,255,0.3)] md:bg-[rgba(0,186,255,0.2)] blur-[150px] 2xl:blur-[300px]"
					animate={{
						x: [0, 50, -50, 0],
						y: [0, -50, 50, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 10,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 left-0 w-[60vw] xl:w-[50vw] h-full max-h-[80vh] rounded-full bg-[rgba(0,255,159,0.3)] md:bg-[rgba(0,255,159,0.2)] blur-[150px] 2xl:blur-[300px]"
					animate={{
						x: [0, -50, 50, 0],
						y: [0, 50, -50, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 13,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-[60vw] xl:w-[50vw] h-full max-h-[80vh] rounded-full bg-[rgba(255,153,0,0.3)] md:bg-[rgba(255,153,0,0.2)] blur-[150px] 2xl:blur-[300px]"
					animate={{
						x: [0, 30, -50, 0],
						y: [0, -50, 30, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 8,
						ease: "easeInOut",
					}}
				/>
			</div>
		</div>
	);
}
