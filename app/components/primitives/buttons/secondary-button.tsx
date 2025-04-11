import React from "react";
import type { ButtonProps } from "./button-types";

export const SecondaryButton: React.FC<ButtonProps> = ({
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
			flex rounded-[2px] w-fit items-center gap-2 px-3 py-2 border border-dunkelblau-100 focus-outline-default
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
