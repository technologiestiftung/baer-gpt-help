import React from "react";
import { AccentButton } from "../primitives/buttons/accent-button";
import { content } from "~/content";

type CompactBannerContentProps = {
	setIsExpanded: (expanded: boolean) => void;
	handleAcceptAll: () => void;
	handleDecline: () => void;
};

export const CompactBannerContent: React.FC<CompactBannerContentProps> = ({
	setIsExpanded,
	handleAcceptAll,
	handleDecline,
}) => {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-hellblau-30 border-t border-hellblau-50 z-50">
			<div className="w-full max-w-screen-xl mx-auto gap-4 px-6 py-3 md:py-4 flex flex-col lg:flex-row items-center justify-between">
				<div>
					<h2 className="text-lg text-dunkelblau-100 mb-2 font-semibold">
						{content["cookiesBanner.title"]}
					</h2>
					<p className="max-w-3xl text-base leading-6 text-dunkelblau-100 self-start">
						{content["cookiesBanner.message.short"]}
						<button
							onClick={() => setIsExpanded(true)}
							aria-label={content["cookiesBanner.expandButton.ariaLabel"]}
							className="underline text-dunkelblau-100 outline-offset-1 focus-outline-default rounded-[3px]"
						>
							{content["cookiesBanner.expandButton"]}
						</button>
					</p>
				</div>

				<div className="flex flex-shrink-0 flex-col w-full md:w-fit md:flex-row gap-2">
					<button
						onClick={handleDecline}
						className="px-3 py-2 text-lg leading-7 font-normal cursor-pointer h-11 text-dunkelblau-100 hover:underline outline-offset-1 focus-outline-default rounded-[3px]"
						aria-label={content["cookiesBanner.button.deny"]}
					>
						{content["cookiesBanner.button.deny"]}
					</button>

					<AccentButton
						onClick={handleAcceptAll}
						ariaLabel={content["cookiesBanner.button.accept"]}
					>
						{content["cookiesBanner.button.accept"]}
					</AccentButton>
				</div>
			</div>
		</div>
	);
};
