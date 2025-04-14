import React from "react";
import { TertiaryAnchorLink } from "../primitives/anchor-links/tertiary-anchor-link";
import { content } from "../../content";

interface VideoItemProps {
	title: string;
	subtitle: string;
	href: string;
}

export const VideoItem: React.FC<VideoItemProps> = ({
	title,
	subtitle,
	href,
}) => {
	return (
		<div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between px-1 lg:px-3 py-3 border-b-[0.5px] border-dunkelblau-200">
			<div className="flex flex-col">
				<p className="text-base leading-6 font-semibold">{title}</p>
				<p className="text-xs leading-4 font-normal">{subtitle}</p>
			</div>
			<TertiaryAnchorLink href={href}>
				{content["anchor.toVideo.label"]}
				<img
					src="/icons/arrow-right-icon.svg"
					alt={content["anchor.toVideo.alt"]}
				/>
			</TertiaryAnchorLink>
		</div>
	);
};
