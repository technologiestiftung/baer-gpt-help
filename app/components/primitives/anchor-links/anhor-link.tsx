import React from "react";
import type { AnchorLinkProps } from "./anchor-link-types";

export const AnchorLink: React.FC<AnchorLinkProps> = ({
	href,
	target = "_self",
	rel,
	ariaLabel,
	title,
	className,
}) => {
	return (
		<a
			href={href}
			target={target}
			rel={rel}
			aria-label={ariaLabel}
			title={title}
			className={`flex underline decoration-1 underline-offset-4 focus-outline-default text-base leading-6 font-normal
            ${className}`}
		>
			<span>{title}</span>
			<img src="/icons/arrow-icon-dark.svg" />
		</a>
	);
};
