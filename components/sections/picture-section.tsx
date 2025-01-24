/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Gallery from "../miscellaneous/gallery";
import useInView from "@/hooks/util-hooks/useInView";
import { usePictureInView } from "@/hooks/use-picture-inview";

const PictureSection = () => {
	const updatePictureInView = usePictureInView(
		(state) => state.updatePictureInView
	);
	const pictureRef = useRef<HTMLDivElement>(null);
	const pictureTitleRef = useRef<HTMLHeadingElement>(null);
	const pictureTitleInView = useInView({
		ref: pictureTitleRef,
		once: true,
	});
	const isPictureInView = useInView({ ref: pictureRef, once: false });

	useEffect(() => {
		if (isPictureInView) {
			updatePictureInView(true);
		} else {
			updatePictureInView(false);
		}
	}, [isPictureInView]);

	return (
		<section
			ref={pictureTitleRef}
			style={{
				transform: pictureTitleInView ? "none" : "translateY(100px)",
				opacity: pictureTitleInView ? 1 : 0,
				transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
			}}
			className="relative z-50"
		>
			<div className="w-full h-full flex flex-col gap-y-10 bg-background pb-10x pt-12 xl:py-16x relative z-20z items-center ">
				<Image
					src="/noise_effect.webp"
					alt="dog"
					fill
					priority
					className=" fixed inset-0 z-10 pointer-events-none"
				/>
				<div
					ref={pictureRef}
					id="profile"
					className="flex w-full justify-center gap-x-2 items-center px-3 min-[500px]:px-5 md:px-8  min-[1440px]:px-12 xl:pb-10 xl:pt-16	"
				>
					<Image
						src="/dog-hood.png"
						alt="dog"
						width={60}
						height={60}
						className=" max-w-[60px]"
					/>
					<h2 className="text-2xl text-center sm:text-3xl text-secondary lg:text-5xl xl:text-6xl">
						Choose your profile picture
					</h2>
					<Image
						src="/dog-hood.png"
						alt="dog"
						width={60}
						height={60}
						className=" max-w-[60px]"
					/>
				</div>

				<Gallery />
			</div>
		</section>
	);
};

export default PictureSection;
