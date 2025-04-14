import React from "react";
import type { ButtonProps } from "./button-types";

export const TertiaryButton: React.FC<ButtonProps> = ({
	onClick,
	disabled,
	type = "button",
	ariaLabel,
	title,
	children,
	className,
}) => {
	return (
		<button
			className={`
			flex rounded-[2px] w-fit items-center gap-2 px-2 py-1 border border-dunkelblau-100 hover:bg-hellblau-30 focus-outline-default text-base leading-6
			${className}`}
			disabled={disabled}
			onClick={onClick}
			type={type}
			aria-label={ariaLabel}
			title={title}
		>
			{children}
		</button>
	);
};
