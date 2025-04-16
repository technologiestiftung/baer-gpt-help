import { content } from "~/content";
import { VideoSection } from "../../components/video-section/video-section";
import { Feedback } from "~/components/feedback/feedback";

export default function Index() {
	return (
		<>
			<div className="max-w-[1512px] mx-auto flex flex-col items-start">
				<div className="md:max-w-[603px] lg:max-w-[815px] px-5 lg:px-[50px] 1512:px-0 py-10 md:py-[60px] lg:py-20 gap-3 flex flex-col text-dunkelblau-200">
					<h1 className="lg:text-6xl lg:leading-none font-semibold md:text-4xl md:leading-10 text-2xl leading-8">
						{content["tutorials.title"]}
					</h1>
					<p className="lg:text-xl lg:leading-7 text-base leading-6 font-normal">
						{content["tutorials.description"]}
					</p>
				</div>
			</div>

			<div className="w-full flex flex-col items-center bg-dunkelblau-100 text-white py-10 md:py-[60px] lg:py-20">
				<div className="w-full flex flex-col gap-2 lg:gap-3 lg:max-w-[935px] px-5 lg:px-0">
					<div className="flex flex-row justify-between items-center text-sm md:text-base leading-5 md-leading-6 font-semibold">
						<p>{content["tutorials.video.title"]}</p>
						<div className="bg-white font-semibold text-dunkelblau-200 rounded-full px-2">
							{content["tutorials.pill.videoTutorial"]}
						</div>
					</div>
					<iframe
						className="w-full aspect-video rounded-[3px]"
						title={`Video: ${content["tutorials.video.title"]}`}
						src={`${content["tutorials.video.link"]}&color=1E3791&title=0&byline=0&portrait=0&texttrack=de`}
						allowFullScreen={true}
						referrerPolicy="strict-origin-when-cross-origin"
					/>
				</div>
			</div>

			<div className="max-w-[1512px] mx-auto flex flex-col py-10 md:py-[60px] lg:py-[100px] px-5 lg:px-[50px] 1512:px-0 gap-10 md:gap-[80px] lg:gap-[100px]">
				{content["tutorials.sections"]
					.slice(1)
					.map(({ title, videos }, index) => (
						<VideoSection
							key={index}
							sectionTitle={title}
							sectionElements={videos}
						/>
					))}
			</div>
			<Feedback />
		</>
	);
}
