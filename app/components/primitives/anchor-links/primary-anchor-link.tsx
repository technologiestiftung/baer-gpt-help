import React from "react";
import { Link } from "react-router";
import type { AnchorLinkProps } from "./anchor-link-types";

export const PrimaryAnchorLink: React.FC<AnchorLinkProps> = ({
	href,
	target = "_self",
	rel,
	ariaLabel,
	title,
	className,
	children,
}) => {
	return (
		<Link
			to={href}
			target={target}
			rel={rel}
			aria-label={ariaLabel}
			className={`
			flex rounded-[2px] w-fit items-center gap-2 px-3 py-2 bg-dunkelblau-100 text-white focus-outline-default
			${className}`}
			title={title}
		>
			{children}
		</Link>
	);
};
