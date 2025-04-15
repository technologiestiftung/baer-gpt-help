import { Parallax } from "react-scroll-parallax";

export function HeroParallaxBackground() {
	return (
		<>
			<Parallax speed={-40} className="absolute w-full h-full">
				<img
					src="/icons/light-bulb.svg"
					alt="icon light-bulb"
					className="w-[120px] top-40 lg:w-[440px] lg:-top-30 right-20 rotate-12 absolute fast lg:slow"
				/>
				<img
					src="/icons/question.svg"
					alt="icon question"
					className="w-[72px] top-[420px] lg:w-[360px] lg:top-130 left-10 -rotate-12 absolute slow"
				/>
				<img
					src="/icons/magnifying-glass.svg"
					alt="icon magnifying-glass"
					className="w-[60px] top-[650px] right-60 lg:w-[300px] lg:top-200 lg:right-20 absolute slow"
				/>
			</Parallax>
		</>
	);
}
