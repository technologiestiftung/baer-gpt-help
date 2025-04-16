import { useLocation } from "react-router";
import { SecondaryTrackedAnchorLink } from "../primitives/anchor-links/secondary-tracked-anchor-link";
import { content } from "../../content";

export const DesktopNavigation = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<nav className="hidden 1080:flex justify-end items-center text-dunkelblau-100">
			<ul className="flex flex-row gap-8 text-lg leading-7 font-normal">
				{content.header.nav.internal.map(({ url, name, ariaLabel }, index) => (
					<li key={index} className="flex items-center">
						<a
							href={url}
							className={`focus-outline-default border-b hover:border-b-dunkelblau-100 
                                ${currentPath === url ? "border-b border-b-dunkelblau-100" : "border-b-transparent"}
                            `}
							aria-label={ariaLabel}
						>
							{name}
						</a>
					</li>
				))}
				<SecondaryTrackedAnchorLink
					href={content.header.nav.external.url}
					target="_blank"
					rel="noopener noreferrer"
					className="pr-2"
				>
					{content.header.nav.external.name}
					<img
						src="/icons/arrow-icon-dark.svg"
						alt={content.header.nav.external.altText}
						className="size-6"
					/>
				</SecondaryTrackedAnchorLink>
			</ul>
		</nav>
	);
};
