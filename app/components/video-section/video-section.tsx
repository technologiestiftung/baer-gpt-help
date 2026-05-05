import React from "react";
import { Link } from "react-router";
import { createSlug } from "~/utils/create-slug";
import { VimeoPlayer } from "../primitives/video-players/vimeo-player";

interface VideoSectionProps {
	sectionTitle: string;
	sectionElements: ReadonlyArray<{
		videoTitle: string;
		videoLink: string;
	}>;
	videoType: "tutorials" | "training";
}

export const VideoSection: React.FC<VideoSectionProps> = ({
	sectionTitle,
	sectionElements,
	videoType,
}) => {
	return (
		<div className="flex flex-col gap-6 lg:gap-9">
			<h2 className="lg:text-4xl lg:leading-10 font-semibold md:text-3xl md:leading-9 text-2xl leading-8">
				{sectionTitle}
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				{sectionElements.map(({ videoTitle, videoLink }, videoIndex) => {
					const videoSlug = createSlug(videoTitle);
					return (
						<div className="flex flex-col gap-3 w-full" key={videoIndex}>
							<VimeoPlayer
								srcUrl={`${videoLink}&color=1E3791&title=0&byline=0&portrait=0&texttrack=de`}
								title={`Video: ${videoTitle}`}
							/>
							<Link
								to={`/${videoType}/${videoSlug}`}
								className="md:text-lg md:leading-7 font-semibold text-base leading-6 hover:underline hover:underline-offset-6"
							>
								{videoTitle}
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};
