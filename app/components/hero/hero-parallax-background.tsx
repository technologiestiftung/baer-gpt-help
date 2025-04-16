import { Parallax } from "react-scroll-parallax";

export function HeroParallaxBackground() {
	return (
		<>
			<Parallax speed={-30} className="absolute w-full h-full overflow-hidden">
				<img
					src="/icons/light-bulb.svg"
					alt="icon light-bulb"
					className="w-[320px] top-0 right-0 lg:w-[440px] lg:-top-20 lg:right-20 rotate-12 absolute fast"
				/>
			</Parallax>
			<Parallax
				speed={-70}
				className="hidden lg:flex absolute w-full h-full overflow-hidden"
			>
				<img
					src="/icons/question.svg"
					alt="icon question"
					className="top-[370px] w-[300px] -left-20 lg:top-130 lg:left-10 -rotate-12 absolute"
				/>
			</Parallax>
			<Parallax
				speed={-40}
				className="hidden lg:flex absolute w-full h-full overflow-hidden"
			>
				<img
					src="/icons/magnifying-glass.svg"
					alt="icon magnifying-glass"
					className="w-[60px] top-[650px] right-60 lg:w-[300px] lg:top-210 lg:right-20 absolute"
				/>
			</Parallax>
		</>
	);
}
