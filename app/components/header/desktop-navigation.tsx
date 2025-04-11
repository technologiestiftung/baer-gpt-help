import { useLocation } from "react-router";
import { AnchorLink } from "../primitives/anchor-links/anchor-link";
import type { NavItem, ExternalNavItem } from "./header";

interface DesktopNavigationProps {
	navItems: NavItem[];
	externalNavItem: ExternalNavItem;
}

export const DesktopNavigation = ({
	navItems,
	externalNavItem,
}: DesktopNavigationProps) => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<nav className="hidden lg:flex justify-end items-center text-dunkelblau-100">
			<ul className="flex flex-row gap-8 text-lg leading-7 font-normal">
				{navItems.map((item, i) => (
					<li key={i} className="flex items-center">
						<a
							href={item.url}
							className={`focus-outline-default border-b hover:border-b-dunkelblau-100 
                                ${currentPath === item.url ? "border-b border-b-dunkelblau-100" : "border-b-transparent"}
                            `}
							aria-label={item.ariaLabel}
						>
							{item.name}
						</a>
					</li>
				))}
				<AnchorLink
					href={externalNavItem.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{externalNavItem.name}
					<img
						src="/icons/arrow-icon-dark.svg"
						alt={externalNavItem.altText}
						className="size-6"
					/>
				</AnchorLink>
			</ul>
		</nav>
	);
};
