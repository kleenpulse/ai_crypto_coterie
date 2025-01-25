import { IntegrationProps } from "@/types/integration";
import React, { useRef } from "react";
import BlurImage from "../miscellaneous/blur-image";
import useInView from "@/hooks/util-hooks/useInView";

export const IntegrationCard = ({
	description,
	title,
	image,
	index,
}: IntegrationProps & { index: number }) => {
	const integrationRef = useRef<HTMLDivElement>(null);
	const integrationInView = useInView({
		ref: integrationRef,
		once: true,
	});

	return (
		<div
			ref={integrationRef}
			style={{
				transform: integrationInView ? "none" : "translateY(100px)",
				opacity: integrationInView ? 1 : 0,
				transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)  ${
					0.1 * index
				}s`,
			}}
			className="w-full max-w-[280px] xl:max-w-[300px] relative flex flex-col justify-end gap-y-3	 font-roboto  text-xs sm:text-sm md:text-base h-[150px] sm:h-[232px] border border-gray-400 rounded-xl p-3 bg-white/20 backdrop-blur-3xl"
		>
			<p className="text-white font-light">{description}</p>
		</div>
	);
};
