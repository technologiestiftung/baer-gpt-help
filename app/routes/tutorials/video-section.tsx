import React from "react";
import { Link } from "react-router";

interface VideoSectionProps {
	sectionTitle: string;
	sectionElements: ReadonlyArray<{
		title: string;
		videoLink: string;
		link: string;
	}>;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
	sectionTitle,
	sectionElements,
}) => (
	<div className="flex flex-col gap-6 lg:gap-9">
		<h2 className="lg:text-4xl lg:leading-10 font-semibold md:text-3xl md:leading-9 text-2xl leading-8">
			{sectionTitle}
		</h2>
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
			{sectionElements.map(({ title, videoLink, link }, index) => (
				<div className="flex flex-col gap-3 w-full" key={index}>
					<iframe
						className="w-full aspect-video rounded-[3px]"
						title={`Video: ${title}`}
						src={`${videoLink}&color=1E3791&title=0&byline=0&portrait=0&texttrack=de`}
						allowFullScreen={true}
						referrerPolicy="strict-origin-when-cross-origin"
					/>
					<Link
						to={link}
						className="md:text-lg md:leading-7 font-semibold text-base leading-6 hover:underline"
					>
						{title}
					</Link>
				</div>
			))}
		</div>
	</div>
);
