import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
	children?: React.ReactNode;
	href?: string;
}

const HexagonIcon = forwardRef<SVGSVGElement, SVGProps>(
	({ className, ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="55"
				height="63"
				viewBox="0 0 55 63"
				fill="none"
				className={cn(className)}
				ref={ref}
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M20.6944 4.45532C17.0166 6.37118 14.0076 7.99237 14.0083 8.05831C14.0099 8.2285 22.8352 12.698 23.1484 12.6871C23.2909 12.6823 24.3246 12.2065 25.4453 11.6298L27.4834 10.5816L29.7092 11.7257L31.9349 12.87L35.5799 11.2321C41.0721 8.76413 41.6426 8.49368 41.5532 8.40282C41.4345 8.28226 39.4646 7.22397 34.1199 4.41018C31.5369 3.05024 29.0299 1.71687 28.5486 1.44706C28.0673 1.17726 27.6079 0.960214 27.5276 0.964415C27.4474 0.968617 24.3723 2.53954 20.6944 4.45532ZM4.56351 12.8085L0.734935 14.7861V23.4653C0.734935 28.239 0.785207 32.1445 0.846874 32.1445C0.908326 32.1445 2.792 31.328 5.0327 30.33L9.10674 28.5155V19.367L11.0976 20.4516C12.6317 21.2866 14.1667 22.12 15.7027 22.9516L18.3169 24.367L19.4801 23.841C20.2097 23.5106 20.9378 23.177 21.6644 22.8401C22.2258 22.5787 23.6041 21.9579 24.7272 21.4603C25.8502 20.9626 26.8898 20.4621 27.0372 20.348C27.233 20.1965 24.8452 18.877 18.2056 15.4674C13.2007 12.8973 8.94524 10.8026 8.74899 10.8126C8.55274 10.8227 6.66928 11.7207 4.56351 12.8085ZM42.2432 13.3638C39.6357 14.541 37.5004 15.5511 37.498 15.6087C37.4957 15.6663 38.9169 16.5113 40.6564 17.4863C42.3957 18.4615 43.8189 19.3115 43.8189 19.3755C43.8189 19.4394 42.2797 20.1851 40.3987 21.0331C38.5175 21.8808 33.7626 24.0282 29.8319 25.805L16.6617 31.7582C13.3487 33.2558 10.3625 34.6057 10.0256 34.7583C3.25869 37.8216 1.39874 38.6716 1.14331 38.8175C0.886465 38.9644 0.828288 39.8179 0.782573 44.1012L0.728027 49.21L4.15172 50.9545L7.57533 52.6988L12.3227 50.5563C14.9338 49.3781 17.0701 48.3522 17.0701 48.2767C17.0701 48.2013 16.5876 47.887 15.9981 47.5778C15.4084 47.2686 14.191 46.5841 13.2926 46.0565C12.3942 45.5288 11.4984 45.0446 11.3017 44.9804C11.1051 44.9164 10.9471 44.8044 10.9503 44.7313C10.9536 44.6584 13.0441 43.6655 15.5957 42.5245C20.5515 40.3087 24.3441 38.6009 32.4864 34.9188C36.1273 33.2727 39.7687 31.6275 43.4105 29.9834C46.6111 28.5387 50.3325 26.8514 51.6802 26.2339L54.1304 25.1112L54.1849 19.9442L54.2397 14.7775L50.7672 12.9952C48.8573 12.015 47.2248 11.2154 47.1392 11.2183C47.0536 11.221 44.8505 12.1864 42.2432 13.3638ZM53.2001 32.0041C52.6884 32.2541 51.6777 32.722 50.9541 33.044C50.2304 33.3659 48.8573 33.9855 47.9026 34.4211L46.167 35.2127L46.1274 39.7488C46.1056 42.2436 46.0137 44.2737 45.9233 44.2605C45.7178 44.23 42.4649 42.5617 39.195 40.8096C36.835 39.5451 36.6867 39.4949 36.1322 39.7695C35.8116 39.9284 33.8953 40.7878 31.8738 41.6797C29.8523 42.5714 28.1325 43.3593 28.0516 43.4306C27.9709 43.5018 32.0394 45.7069 37.0929 48.3311L46.2808 53.1022L50.2057 51.0719C52.3642 49.9553 54.1997 48.9368 54.2842 48.8087C54.4744 48.5207 54.4581 31.5101 54.2677 31.5331C54.1923 31.5422 53.7118 31.7542 53.2001 32.0041ZM31.4655 51.9702C30.7846 52.2629 30.104 52.5561 29.4236 52.8496C27.3688 53.7386 27.7715 53.768 25.3269 52.5511C23.6987 51.7406 22.9969 51.4905 22.6923 51.6119C22.4637 51.7029 20.4972 52.5877 18.3218 53.578C16.1465 54.5683 14.2913 55.3785 14.199 55.3785C13.2863 55.3785 14.8036 56.285 20.6585 59.2385L27.525 62.7018L30.4141 61.2755C32.0031 60.491 35.208 58.9201 37.5364 57.7846C39.8645 56.6488 41.7406 55.6902 41.7055 55.654C41.6702 55.618 39.7193 54.6162 37.3702 53.4279L33.099 51.2676L31.4655 51.9702Z"
					fill="white"
				/>
			</svg>
		);
	}
);

HexagonIcon.displayName = "HexagonIcon";
export default HexagonIcon;
