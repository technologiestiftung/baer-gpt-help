import React from "react";
import type { AnchorLinkProps } from "./anchor-link-types";

export const TertiaryAnchorLink: React.FC<AnchorLinkProps> = ({
	href,
	target = "_self",
	rel,
	ariaLabel,
	title,
	className,
	children,
}) => {
	return (
		<a
			href={href}
			target={target}
			rel={rel}
			aria-label={ariaLabel}
			title={title}
			className={`
			flex rounded-[2px] w-fit items-center gap-2 px-2 py-1 border border-dunkelblau-100 hover:bg-hellblau-30 focus-outline-default text-base leading-6
			${className}`}
		>
			{children}
		</a>
	);
};
