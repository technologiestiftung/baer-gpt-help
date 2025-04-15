import { content } from "~/content";
import { PrimaryAnchorLink } from "../primitives/anchor-links/primary-anchor-link";
import { useLocation } from "react-router";

export function Feedback() {
	const location = useLocation();
	const isNotIndexPage = location.pathname !== "/";

	return (
		<div
			className={`flex flex-col items-center justify-center gap-3 px-5 py-[60px] lg:py-20 bg-hellblau-100 ${isNotIndexPage && "lg:px-[50px] lg:py-[40px]"}`}
		>
			<div
				className={`flex items-center gap-6 md:gap-8 flex-col md:max-w-[463px] lg:max-w-[580px]
				${isNotIndexPage && "lg:flex-row lg:w-full lg:justify-between lg:max-w-[1412px]"}`}
			>
				<div
					className={`flex flex-col justify-center gap-1 lg:gap-3 text-dunkelblau-200 items-center text-center ${isNotIndexPage && "lg:items-start"}`}
				>
					<div className="lg:text-4xl lg:font-bold lg:leading-10 text-2xl leading-8 font-semibold ">
						{content["feedback.title"]}
					</div>
					<div className="text-base md:text-lg lg:text-2xl leading-6 lg:leading-8 text-center font-normal">
						{content["feedback.description"]}
					</div>
				</div>
				<PrimaryAnchorLink
					href={content["feedback.link"]}
					title={content["feedback.button"]}
					target="_blank"
					rel="noopener noreferrer"
				>
					{content["feedback.button"]}
					<img src="/icons/arrow-icon-light.svg" />
				</PrimaryAnchorLink>
			</div>
		</div>
	);
}
