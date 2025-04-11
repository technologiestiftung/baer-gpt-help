import { useLocation } from "react-router";
import { AnchorLink } from "../primitives/anchor-links/anchor-link";
import type { NavItem, ExternalNavItem } from "./header";

interface MobileNavigationProps {
	navItems: NavItem[];
	externalNavItem: ExternalNavItem;
}

export const MobileNavigation = ({
	navItems,
	externalNavItem,
}: MobileNavigationProps) => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<nav className="flex lg:hidden justify-center items-center h-svh px-5 text-dunkelblau-100 text-3xl leading-9 font-semibold">
			<div className="flex flex-col gap-5 items-start">
				{navItems.map((item, i) => (
					<div key={i}>
						<a
							href={item.url}
							className={
								currentPath === item.url
									? "underline decoration-3 underline-offset-6"
									: ""
							}
							aria-label={item.ariaLabel}
						>
							{item.name}
						</a>
					</div>
				))}

				<AnchorLink
					href={externalNavItem.url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-5"
				>
					{externalNavItem.name}
					<img
						src="/icons/arrow-icon-dark.svg"
						alt={externalNavItem.altText}
						className="size-6"
					/>
				</AnchorLink>
			</div>
		</nav>
	);
};
