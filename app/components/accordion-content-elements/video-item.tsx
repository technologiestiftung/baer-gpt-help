import React from "react";
import { TertiaryTrackedAnchorLink } from "../primitives/anchor-links/tertiary-tracked-anchor-link";
import { content } from "../../content";

interface VideoItemProps {
	title: string;
	href: string;
	hasBorder?: boolean;
}

export const VideoItem: React.FC<VideoItemProps> = ({
	title,
	href,
	hasBorder = true,
}) => {
	return (
		<div
			className={`flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between px-0 lg:px-3 py-3 ${hasBorder && "border-b-[0.5px] border-dunkelblau-200"}`}
		>
			<div className="flex flex-col">
				<p className="text-base leading-6 font-semibold">{title}</p>
				<p className="text-xs leading-4 font-normal">Video-Tutorial</p>
			</div>
			<TertiaryTrackedAnchorLink href={href}>
				{content["anchor.toVideo.label"]}
				<img
					src="/icons/arrow-right-icon.svg"
					alt={content["anchor.toVideo.alt"]}
				/>
			</TertiaryTrackedAnchorLink>
		</div>
	);
};
