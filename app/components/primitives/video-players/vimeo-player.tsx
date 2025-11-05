import React, { useEffect } from "react";
import { useCookieBannerStore } from "../../../store/use-cookie-banner-store";
import { content } from "~/content";
import { AccentButton } from "../buttons/accent-button";

interface VimeoPlayerProps {
	title: string;
	srcUrl: string;
}

export const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ title, srcUrl }) => {
	const { hasConsent, checkConsent, acceptConsent } = useCookieBannerStore();

	useEffect(() => {
		checkConsent();
	}, [checkConsent]);

	if (hasConsent === null) {
		return (
			<div className="flex flex-col items-center justify-center bg-hellblau-30 w-full aspect-video p-5 text-center rounded-3px">
				{content["videoPlayer.loading.message"]}
			</div>
		);
	}

	if (!hasConsent) {
		return (
			<div className="flex flex-col items-center justify-center text-dunkelblau-100 gap-2 bg-hellblau-30 w-full aspect-video p-5 text-center rounded-3px">
				<img
					src="/icons/eye-struck-through-blue-icon.svg"
					alt=""
					className="size-14"
				/>

				<h3 className="text-lg font-semibold">
					{content["videoPlayer.blocked.message"]}
				</h3>
				<p className="text-schwarz-40 max-w-xl">
					{content["videoPlayer.vimeo.cookies.message"]}
				</p>
				<AccentButton
					onClick={() => {
						acceptConsent({
							type: "third-party-only",
							thirdPartyCookies: true,
						});
						window.location.reload();
					}}
					ariaLabel={content["videoPlayer.cookies.buttonLabel"]}
				>
					{content["videoPlayer.cookies.buttonLabel"]}
				</AccentButton>
			</div>
		);
	}

	return (
		<iframe
			className="w-full aspect-video rounded-[3px]"
			src={srcUrl}
			allowFullScreen
			title={title}
			referrerPolicy="strict-origin-when-cross-origin"
		/>
	);
};
