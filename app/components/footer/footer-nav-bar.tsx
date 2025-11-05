import { content } from "../../content";
import { TrackedAnchorLink } from "../primitives/anchor-links/tracked-anchor-link";
import { useCookieBannerStore } from "../../store/use-cookie-banner-store";

export function FooterNavBar() {
	const { openBanner } = useCookieBannerStore();
	return (
		<div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-center w-full p-6 lg:py-4 lg:px-[50px] bg-dunkelblau-100 text-white">
			<img
				src="/icons/berlin-baer.svg"
				alt={content["footer.baerIconAltText"]}
				className="size-11"
			/>

			<ul className="flex flex-col lg:flex-row gap-2 lg:gap-8">
				{content.footer.navbar.slice(0, 3).map(({ name, url }, index) => (
					<li key={url}>
						<TrackedAnchorLink
							href={url}
							className="text-white text-base font-normal w-fit focus-outline-default"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex items-center gap-0.5 w-fit border-b border-b-dunkelblau-100 hover:border-b-white">
								<span>{name}</span>
								{index === 0 && (
									<img
										src="/icons/arrow-icon-light.svg"
										className={`${index === 0 ? "flex" : "hidden"}`}
										alt=""
									/>
								)}
							</div>
						</TrackedAnchorLink>
					</li>
				))}

				<li>
					<button
						onClick={() => openBanner(true)}
						aria-label={content.footer.navbar[3].url}
						className="text-white text-base leading-6 font-normal w-fit rounded-3px focus-visible:outline-default hover:underline"
					>
						{content.footer.navbar[3].name}
					</button>
				</li>
			</ul>
		</div>
	);
}
