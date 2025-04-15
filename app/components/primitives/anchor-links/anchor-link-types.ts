import type { ReactNode } from "react";

export interface AnchorLinkProps {
	href: string;
	target?: string;
	rel?: string;
	ariaLabel?: string;
	title?: string;
	className?: string;
	children?: ReactNode;
}
