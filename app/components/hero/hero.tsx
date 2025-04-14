import { content } from "../../content";

export function Hero() {
	return (
		<div className="bg-dunkelblau-100 text-white flex flex-col items-center justify-center">
			<div className="flex flex-col max-w-[623px] lg:max-w-[942px] px-5 md:px-0">
				<div className="flex flex-col items-center justify-center text-center lg:gap-4 md:gap-2 my-[60px] md:my-20 lg:my-[150px]">
					<p className="lg:text-2xl md:text-lg text-sm">
						{content["hero.welcome"]}
					</p>
					<h1 className="font-bold lg:text-5xl md:text-3xl text-[20px]">
						{content["hero.title"]}
					</h1>
				</div>
				<div className="flex flex-col gap-2 lg:gap-3">
					<div className="flex flex-row justify-between items-center text-sm md:text-base leading-5 md-leading-6 font-semibold">
						<p>Erste Schritte mit BärGPT</p>
						<div className="bg-white text-dunkelblau-200 rounded-full px-2">
							Video Tutorial
						</div>
					</div>
					<iframe
						className="w-full aspect-video"
						title={"Video: "}
						src={
							"https://player.vimeo.com/video/1038180636?" +
							"&color=1E3791&title=0&byline=0&portrait=0&texttrack=de"
						}
						allowFullScreen={true}
						referrerPolicy="strict-origin-when-cross-origin"
					/>
				</div>
			</div>
		</div>
	);
}
