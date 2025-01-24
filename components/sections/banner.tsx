/* eslint-disable react-hooks/exhaustive-deps */
import { useNavState } from "@/hooks/use-nav-state";
import useInView from "@/hooks/util-hooks/useInView";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Banner = () => {
	const { updateBannerView } = useNavState();
	const bannerRef = useRef<HTMLDivElement>(null);
	const isBannerInView = useInView({ ref: bannerRef, once: false });

	const { scrollYProgress } = useScroll({
		offset: ["start end", "end start"],
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

	useEffect(() => {
		if (isBannerInView) {
			updateBannerView(true);
		} else {
			updateBannerView(false);
		}
	}, [isBannerInView]);

	return (
		<div
			ref={bannerRef}
			className={cn(
				"w-full  overflow-clip bg-black absolute bottom-0 left-0x z-40  mx-auto max-w-[1900px] left-1/2 -translate-x-1/2"
			)}
		>
			<motion.div
				style={{ x }}
				className="flex items-center gap-x-2 md:gap-x-4 py-1 sm:py-2  w-full "
			>
				{Array.from({ length: 100 }).map((_, index) => (
					<span
						key={index}
						className="w-fit sm:text-2xl md:text-3xl xl:text-[40px] min-[1440px]:text-[52px] text-xl flex-shrink-0 flex items-center gap-x-1 text-primary"
					>
						<Image
							src="/hero/dog-mask.png"
							alt="dog"
							width={50}
							height={50}
							className="max-w-[35px] sm:max-w-[50px] "
						/>
						$SANDOR
					</span>
				))}
			</motion.div>
		</div>
	);
};

export default Banner;
