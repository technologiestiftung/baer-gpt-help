import { content } from "~/content";
import { VideoSection } from "../../components/video-section/video-section";
import { VimeoPlayer } from "~/components/primitives/video-players/vimeo-player";
import { accordionContent } from "./training-content";
import { createSlug } from "~/utils/create-slug";
import { Accordion } from "../../components/primitives/accordion/accordion";

export default function Index() {
	return (
		<>
			<div className="max-w-[1512px] mx-auto flex flex-col items-start">
				<div className="md:max-w-[603px] lg:max-w-[815px] px-5 lg:px-[50px] 1512:px-0 py-10 md:py-[60px] lg:py-20 gap-3 flex flex-col text-dunkelblau-200">
					<h1 className="lg:text-6xl lg:leading-none font-semibold md:text-4xl md:leading-10 text-2xl leading-8">
						{content["training.title"]}
					</h1>
					<p className="lg:text-xl lg:leading-7 text-base leading-6 font-normal">
						{content["training.description"]}
					</p>
				</div>
			</div>

			<div className="w-full flex flex-col items-center bg-dunkelblau-100 text-white py-10 md:py-[60px] lg:py-20">
				<div className="w-full flex flex-col gap-2 lg:gap-3 lg:max-w-[935px] px-5 lg:px-0">
					<div className="flex flex-row justify-between items-center text-sm md:text-base leading-5 md-leading-6 font-semibold">
						<p>{content["training.sections"][0].title}</p>
						<div className="bg-white font-semibold text-dunkelblau-200 rounded-full px-2">
							{content["training.pill.videoTutorial"]}
						</div>
					</div>
					<VimeoPlayer
						srcUrl={`${content["training.sections"][0].videos[0].videoLink}&color=1E3791&title=0&byline=0&portrait=0&texttrack=de`}
						title={`Video: ${content["training.sections"][0].videos[0].videoTitle}`}
					/>
				</div>
			</div>

			<div className="max-w-[1512px] mx-auto flex flex-col py-10 md:py-[60px] lg:py-[100px] px-5 lg:px-[50px] 1512:px-0 gap-10 md:gap-[80px] lg:gap-[100px] mb-[100px]">
				{content["training.sections"]
					.slice(1)
					.map(({ title, videos }, index) => (
						<VideoSection
							videoType="training"
							key={index}
							sectionTitle={title}
							sectionElements={videos}
						/>
					))}

				<div className="flex flex-col gap-10 lg:gap-16">
					{accordionContent.sections.map((section, index) => (
						<div key={index}>
							<h2
								id={createSlug(section.title)}
								className="mb-5 md:mb-6 scroll-mt-[85px] text-xl leading-7 font-semibold md:text-3xl md:leading-9 lg:text-4xl lg:leading-10"
							>
								{section.title}
							</h2>
							<div className="flex flex-col gap-2.5">
								{section.tasks.map(({ task, description }, qIndex) => (
									<Accordion
										key={qIndex}
										question={task}
										answer={description}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
