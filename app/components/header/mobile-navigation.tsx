import { useLocation } from "react-router";
import { SecondaryAnchorLink } from "../primitives/anchor-links/secondary-anchor-link";
import { content } from "../../content";

export const MobileNavigation = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<nav className="flex lg:hidden justify-center items-center h-svh px-5 text-dunkelblau-100 text-3xl leading-9 font-semibold">
			<div className="flex flex-col gap-5 items-start">
				{content.header.nav.internal.map(({ url, name, ariaLabel }, index) => (
					<div key={index}>
						<a
							href={url}
							className={
								currentPath === url
									? "underline decoration-3 underline-offset-6"
									: ""
							}
							aria-label={ariaLabel}
						>
							{name}
						</a>
					</div>
				))}

				<SecondaryAnchorLink
					href={content.header.nav.external.url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-5"
				>
					{content.header.nav.external.name}
					<img
						src="/icons/arrow-icon-dark.svg"
						alt={content.header.nav.external.altText}
						className="size-6"
					/>
				</SecondaryAnchorLink>
			</div>
		</nav>
	);
};
