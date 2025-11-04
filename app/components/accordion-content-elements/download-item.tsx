import React from "react";
import { TertiaryTrackedAnchorLink } from "../primitives/anchor-links/tertiary-tracked-anchor-link";
import { content } from "../../content";

interface DownloadItemProps {
	title: string;
	subtitle: string;
	href: string;
	hasBorder?: boolean;
}

export const DownloadItem: React.FC<DownloadItemProps> = ({
	title,
	subtitle,
	href,
	hasBorder = true,
}) => {
	return (
		<div
			className={`flex flex-col md:flex-row gap-3 lg:gap-3 md:h-[66px] md:items-center  justify-between px-0 lg:px-3 py-3 ${hasBorder && "border-b-[0.5px] border-dunkelblau-200"}`}
		>
			<div className="flex flex-col">
				<p className="text-base leading-6 font-semibold">{title}</p>
				<p className="text-xs leading-4 font-normal">{subtitle}</p>
			</div>
			<div className="flex items-start flex-shrink-0">
				<TertiaryTrackedAnchorLink href={href}>
					{content["anchor.download.label"]}
					<img
						src="/icons/download-icon.svg"
						alt={content["anchor.download.alt"]}
					/>
				</TertiaryTrackedAnchorLink>
			</div>
		</div>
	);
};
