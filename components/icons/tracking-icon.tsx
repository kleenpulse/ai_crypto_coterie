import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const TrackingIcon = forwardRef<SVGSVGElement, SVGProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				className={cn(className)}
				ref={ref}
				{...props}
			>
				<path
					d="M8.00001 30.6666H1.33334V23.9999H4.00001V27.9999H8.00001V30.6666ZM24 30.6666V27.9999H28V23.9999H30.6667V30.6666H24ZM16 24.6666C13.3333 24.6666 10.9169 23.8777 8.75068 22.2999C6.58446 20.7221 5.0009 18.6221 4.00001 15.9999C5.00001 13.3777 6.58357 11.2777 8.75068 9.69992C10.9178 8.12214 13.3342 7.33325 16 7.33325C18.6658 7.33325 21.0827 8.12214 23.2507 9.69992C25.4187 11.2777 27.0018 13.3777 28 15.9999C27 18.6221 25.4169 20.7221 23.2507 22.2999C21.0845 23.8777 18.6676 24.6666 16 24.6666ZM16 20.6666C17.2889 20.6666 18.3889 20.211 19.3 19.2999C20.2111 18.3888 20.6667 17.2888 20.6667 15.9999C20.6667 14.711 20.2111 13.611 19.3 12.6999C18.3889 11.7888 17.2889 11.3333 16 11.3333C14.7111 11.3333 13.6111 11.7888 12.7 12.6999C11.7889 13.611 11.3333 14.711 11.3333 15.9999C11.3333 17.2888 11.7889 18.3888 12.7 19.2999C13.6111 20.211 14.7111 20.6666 16 20.6666ZM16 17.9999C15.4445 17.9999 14.9725 17.8057 14.584 17.4173C14.1956 17.0288 14.0009 16.5564 14 15.9999C13.9991 15.4435 14.1938 14.9715 14.584 14.5839C14.9742 14.1964 15.4462 14.0017 16 13.9999C16.5538 13.9981 17.0262 14.1928 17.4173 14.5839C17.8085 14.975 18.0027 15.447 18 15.9999C17.9973 16.5528 17.8031 17.0253 17.4173 17.4173C17.0316 17.8093 16.5591 18.0035 16 17.9999ZM1.33334 7.99992V1.33325H8.00001V3.99992H4.00001V7.99992H1.33334ZM28 7.99992V3.99992H24V1.33325H30.6667V7.99992H28Z"
					fill="#C7CFF5"
				/>
			</svg>
		);
	}
);

TrackingIcon.displayName = "TrackingIcon";
export default TrackingIcon;
