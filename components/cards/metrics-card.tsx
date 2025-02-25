import { IntegrationProps } from "@/types/integration";
import React, { useRef } from "react";
import BlurImage from "../miscellaneous/blur-image";
import useInView from "@/hooks/util-hooks/useInView";

export const MetricsCard = ({
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
			className="min-w-[300px] xl:min-w-[330px] min-[1440px]:min-w-[400px] max-w-[350px] relative flex flex-col shrink-0x justify-end gap-y-3	    xl:h-[425px] h-[325px] border border-gray-400 rounded-xl p-3 bg-white/20 backdrop-blur-md"
		>
			<h3 className="text-white font-medium xl:text-xl">{title}</h3>
			<p className="text-white font-light text-xs sm:text-sm ">{description}</p>
		</div>
	);
};
