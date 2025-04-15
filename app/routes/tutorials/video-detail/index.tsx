import { useParams } from "react-router";
import { content } from "~/content";
import { Feedback } from "~/components/feedback/feedback";
import { Link } from "react-router";

function extractIdFromSlug(fullSlug: string): {
	sectionId: number;
	videoId: number;
} {
	const [sectionId, videoId] = fullSlug.split("-").slice(0, 2).map(Number);
	return { sectionId, videoId };
}

export function VideoDetail() {
	const { "video-slug": slug } = useParams();
	const { sectionId, videoId } = extractIdFromSlug(slug || "");

	const video = content["tutorials.sections"][sectionId].videos[videoId];

	return (
		<>
			<div className="2xl:max-w-[1174px] xl:max-w-[964px] mx-auto flex flex-col xl:pt-6 p-5">
				<div className="text-base text-dunkelblau-200 flex flex-row gap-1 items-end">
					<Link
						to={`/tutorials/`}
						className="text-sm lg:text-base hover:underline"
					>
						{content["tutorials.title"]}
					</Link>
					<span className="text-base">/</span>
					<div className="font-bold text-sm lg:text-base">
						{video.videoTitle}
					</div>
				</div>
				<h1 className="text-lg leading-7 lg:text-5xl lg:leading-none font-bold mt-10 md:mt-[60px] mb-3 lg:mt-20 lg:mb-7">
					{video.videoTitle}
				</h1>
				<iframe
					className="w-full aspect-video rounded-[3px] mb-[60px] md:mb-20 lg:mb-[100px]"
					title={`Video: ${video.videoTitle}`}
					src={`${video.videoLink}&color=1E3791&title=0&byline=0&portrait=0&texttrack=de`}
					allowFullScreen={true}
					referrerPolicy="strict-origin-when-cross-origin"
				/>
			</div>
			<Feedback />
		</>
	);
}

export default VideoDetail;
