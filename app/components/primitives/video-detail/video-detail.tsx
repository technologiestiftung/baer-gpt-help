import { useParams } from "react-router";
import { content } from "~/content";
import { Link } from "react-router";
import { createSlug } from "~/utils/create-slug";
import { VimeoPlayer } from "~/components/primitives/video-players/vimeo-player";

interface VideoDetailProps {
	mainRoute: "tutorials" | "training";
	videoElements: { videoTitle: string; videoLink: string }[];
}

export function VideoDetail({ mainRoute, videoElements }: VideoDetailProps) {
	const { "video-slug": slug } = useParams();

	const videoElement = videoElements.find(
		(video) => createSlug(video.videoTitle) === slug,
	);

	return (
		<>
			<div className="2xl:max-w-[1174px] xl:max-w-[964px] mx-auto flex flex-col xl:pt-6 p-5">
				<div className="text-base text-dunkelblau-200 flex flex-row gap-1 items-baseline md:items-end">
					<Link
						to={`/${mainRoute}/`}
						className="flex-shrink-0 text-sm lg:text-base hover:underline hover:underline-offset-6"
					>
						{content[`${mainRoute}.title`]}
					</Link>
					<span className="text-base">/</span>
					<div className="font-bold text-sm lg:text-base">
						{videoElement?.videoTitle}
					</div>
				</div>
				<h1 className="text-lg leading-7 lg:text-5xl lg:leading-none font-bold mt-10 md:mt-[60px] mb-3 lg:mt-20 lg:mb-7">
					{videoElement?.videoTitle}
				</h1>
				<VimeoPlayer
					srcUrl={`${videoElement?.videoLink}&color=1E3791&title=0&byline=0&portrait=0&texttrack=de`}
					title={`Video: ${videoElement?.videoTitle}`}
				/>
			</div>
		</>
	);
}

export default VideoDetail;
