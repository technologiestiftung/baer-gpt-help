import React from "react";

interface HeaderIconButtonProps {
	onClick: () => void;
	ariaLabel: string;
	defaultIconSrc: string;
	hoverIconSrc: string;
	className?: string;
}

export const HeaderIconButton = ({
	onClick,
	ariaLabel,
	defaultIconSrc,
	hoverIconSrc,
	className = "",
}: HeaderIconButtonProps) => {
	return (
		<button
			onClick={onClick}
			aria-label={ariaLabel}
			className={`group flex items-center cursor-pointer ${className}`}
		>
			<img src={defaultIconSrc} alt="" className="block group-hover:hidden" />
			<img src={hoverIconSrc} alt="" className="hidden group-hover:block" />
		</button>
	);
};
