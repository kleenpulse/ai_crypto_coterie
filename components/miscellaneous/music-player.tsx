import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { FaPause, FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useCharacter } from "@/hooks/use-character";
import { useLoaderState } from "@/hooks/use-loader-state";

const formatTime = (timeInSeconds: number): string => {
	const minutes = Math.floor(timeInSeconds / 60);
	const seconds = Math.floor(timeInSeconds % 60);
	return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
const MusicPlayer = () => {
	const { updateMusicPlaying } = useCharacter();
	const { updateLoaded, isLoaded } = useLoaderState();
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMusicLoaded, setIsMusicLoaded] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);
	const [duration, setDuration] = useState(0);

	const togglePlay = () => {
		if (isPlaying) {
			audioRef.current?.pause();
			updateMusicPlaying(false);
			setIsPlaying(false);
		} else {
			audioRef.current?.play();
			updateMusicPlaying(true);
			setIsPlaying(true);
		}
	};

	useEffect(() => {
		if (!audioRef.current || !isLoaded) return;
		if (isPlaying || isMusicLoaded) return;

		btnRef.current?.click();
		setIsMusicLoaded(true);
	}, [audioRef, isPlaying, isMusicLoaded, isLoaded]);

	useEffect(() => {
		setTimeout(() => {
			if (!audioRef.current) return;

			setDuration(audioRef.current?.duration || 0);
			const handleTimeUpdate = () => {
				setDuration(audioRef.current?.currentTime || 0);
			};

			audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
		}, 1000);
	}, [audioRef]);

	// ... later in a callback, effect, etc.
	// load("/music/chanch chi.mp3", {
	// 	autoplay: true,
	// 	onload: () => {
	// 		setDuration(audioRef.current?.duration || 0);
	// 	},
	// });

	return (
		<div
			className={
				"w-full flex-shrink-0 md:max-w-[250px] min-[1100px]:max-w-[300px] xl:max-w-[347px] min-[2000px]:max-w-[400px] min-[2900px]:max-w-[600px] min-[2000px]:py-4  rounded-2xl bg-black px-5 md:px-3 xl:px-5 py-2 min-[500px]:py-4 md:py-3 flex items-center gap-x-8 md:gap-x-2 xl:gap-x-4 min-[2900px]:gap-x-6 pointer-events-none opacity-0 translate-y-full other__item"
			}
		>
			<audio
				src="/music/chanch chi.mp3"
				loop
				className="sr-only"
				ref={audioRef}
			/>
			<Button
				variant="icon"
				size={"icon"}
				ref={btnRef}
				className="text-black bg-white size-10 md:size-8 min-[2900px]:size-16 min-[2000px]:size-10 rounded-full md:p-2.5 p-3  pointer-events-auto flex items-center justify-center"
				onClick={togglePlay}
			>
				{isPlaying ? (
					<FaPause className="size-5 min-[500px]:size-6 md:size-5 min-[2900px]:size-7" />
				) : (
					<FaPlay className="size-5 min-[500px]:size-6 md:size-5 min-[2900px]:size-7" />
				)}
			</Button>

			<div className="flex items-center gap-x-1 min-[2000px]:gap-x-4 ">
				<div className="flex flex-col gap-y-1 min-[2000px]:gap-y-4">
					<h2 className="font-semibold text-white sm:font-bold text-2xl md::text-xl xl:text-2xl min-[2000px]:text-3xl min-[2900px]:text-5xl">
						{audioRef.current?.currentSrc
							? decodeURI(
									audioRef.current.currentSrc
										.split("/")
										.pop()!
										.replace(".mp3", "")
							  )
							: "Music"}
					</h2>
					<p className="flex items-center gap-x-1 text-white/80 font-light  xl:text-sm md:text-xs max-[500px]:text-sm min-[2000px]:text-base min-[2900px]:text-2xl">
						<span>
							{formatTime(duration)}
							min
						</span>
						<span>•</span>
						<span>{isPlaying ? "Listening..." : "Paused"}</span>
					</p>
				</div>
				<Image
					src="/chanch-chi.webp"
					width={200}
					height={280}
					alt="music"
					className="absolute right-0 bottom-0 max-w-[90px] sm:max-w-full md:max-w-[80px] xl:max-w-[100px] min-[1440px]:max-w-[118px] min-[2000px]:max-w-[130px] min-[2900px]:max-w-[200px]"
				/>
			</div>
		</div>
	);
};

export default MusicPlayer;
