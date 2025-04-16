import { useEffect, useState } from "react";
import { content } from "../../content";
import { BlueSquareIcon } from "~/components/primitives/icons/blue-square-icon";
import { useTypingAnimation } from "~/components/about-hero/use-typing-animation";

export function AboutHero() {
	const [isCompletionLoading, setIsCompletionLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setIsCompletionLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	const words = content["about.chat.p2"].split(" ");
	const displayedWords = useTypingAnimation(words);

	return (
		<div className="bg-dunkelblau-100 w-full relative min-h-[432px] md:min-h-[428px] lg:min-h-[500px]">
			<div className="flex flex-col gap-10 lg:gap-[60px] md:max-w-[600px] lg:max-w-[934px] mx-auto py-10 px-5 md:px-0 md:py-[60px] lg:py-20">
				<div className="rounded-xs z-10 p-3 md:p-4.5 lg:p-[22px] relative bg-hellblau-100 w-[270px] md:w-fit text-base leading-6 md:text-lg md:leading-7 lg:text-2xl lg:leading-8 font-normal self-start">
					{content["about.chat.p1"]}
					<img
						src="/icons/speech-bubble-triangle-blue.svg"
						className="absolute -top-6 left-0 -z-10"
						alt="speech bubble"
					/>
				</div>
				<div className="md:pl-[122px] lg:pl-[111px] self-end w-full">
					<div className="rounded-xs z-10 p-3 md:p-4.5 lg:p-[22px] relative bg-hellblau-30 w-[270px] md:w-full text-base leading-6 md:text-lg md:leading-7 lg:text-2xl lg:leading-8 font-normal">
						{isCompletionLoading ? (
							<div className="text-dunkelblau-80 flex gap-2 w-full items-center">
								<BlueSquareIcon />
								<span>{content["about.chat.loadingText"]}</span>
							</div>
						) : (
							<span className="animate-fade-in">{displayedWords}</span>
						)}

						<img
							src="/icons/speech-bubble-triangle-white.svg"
							className="absolute -top-6 -right-[1px] -z-10"
							alt="speech bubble"
						/>
					</div>
				</div>
			</div>
			<img
				src="/icons/berlin-baer-large-icon.svg"
				className="absolute bottom-0 right-0 overflow-hidden z-0 hidden lg:flex w-[412px]"
				alt="icon berlin baer"
			/>
		</div>
	);
}
