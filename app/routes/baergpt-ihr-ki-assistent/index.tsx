import { Link } from "react-router";
import { content } from "~/content";
import { VimeoPlayer } from "~/components/primitives/video-players/vimeo-player";

export default function BaergptIhrKiAssistent() {
	const videoTitle = content["faq.section1.a1.video1.title"];
	const videoLink = content["faq.section1.a1.video1.link"];

	return (
		<div className="2xl:max-w-[1174px] xl:max-w-[964px] mx-auto flex flex-col xl:pt-6 p-5">
			<div className="text-base text-dunkelblau-200 flex flex-row gap-1 items-baseline md:items-end">
				<Link
					to="/faq/"
					className="flex-shrink-0 text-sm lg:text-base hover:underline hover:underline-offset-6"
				>
					{content["faq.title"]}
				</Link>
				<span className="text-base">/</span>
				<div className="font-bold text-sm lg:text-base">{videoTitle}</div>
			</div>
			<h1 className="text-lg leading-7 lg:text-5xl lg:leading-none font-bold mt-10 md:mt-[60px] mb-3 lg:mt-20 lg:mb-7">
				{videoTitle}
			</h1>
			<VimeoPlayer
				srcUrl={`${videoLink}&color=1E3791&title=0&byline=0&portrait=0&texttrack=de`}
				title={`Video: ${videoTitle}`}
			/>
		</div>
	);
}
