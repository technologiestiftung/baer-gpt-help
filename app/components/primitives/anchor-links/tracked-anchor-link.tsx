import React from "react";
import type { AnchorLinkProps } from "./anchor-link-types";
import { Link } from "react-router";
import { trackInteraction } from "~/analytics/matomo";

export const TrackedAnchorLink: React.FC<AnchorLinkProps> = ({
	href,
	reloadDocument,
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
			reloadDocument={reloadDocument}
			target={target}
			rel={rel}
			aria-label={ariaLabel}
			title={title}
			className={className}
			onClick={() =>
				trackInteraction({
					eventAction: "anchor-link click",
					eventName: `to: ${href} (from: ${window.location.pathname})`,
				})
			}
		>
			{children}
		</Link>
	);
};
