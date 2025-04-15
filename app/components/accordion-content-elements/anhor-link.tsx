import React from "react";
import type { AnchorLinkProps } from "../primitives/anchor-links/anchor-link-types";
import { TrackedAnchorLink } from "../primitives/anchor-links/tracked-anchor-link";

export const AnchorLink: React.FC<AnchorLinkProps> = ({
	href,
	target = "_self",
	rel,
	ariaLabel,
	title,
	className,
}) => {
	return (
		<TrackedAnchorLink
			href={href}
			target={target}
			rel={rel}
			aria-label={ariaLabel}
			title={title}
			className={`flex gap-1.5 underline decoration-1 underline-offset-4 focus-outline-default text-base leading-6 font-normal
            ${className}`}
		>
			<span>{title}</span>
			<img src="/icons/arrow-icon-dark.svg" />
		</TrackedAnchorLink>
	);
};
