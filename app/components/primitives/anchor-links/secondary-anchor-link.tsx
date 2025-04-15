import React from "react";
import type { AnchorLinkProps } from "./anchor-link-types";
import { Link } from "react-router";

export const SecondaryAnchorLink: React.FC<AnchorLinkProps> = ({
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
			title={title}
			className={`
            flex rounded-[2px] w-fit items-center gap-2 px-3 py-2 border border-dunkelblau-100 text-lg leading-7 font-normal bg-white hover:bg-hellblau-60 focus-outline-default focus-visible:bg-hellblau-60
            ${className}`}
		>
			{children}
		</Link>
	);
};
