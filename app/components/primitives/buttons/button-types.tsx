import React from "react";
import type { ReactNode } from "react";

export interface ButtonProps {
	label?: string | React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit";
	ariaLabel?: string;
	title?: string;
	icon?: React.ReactNode;
	className?: string;
	children?: string | ReactNode;
}
