import React, { useState } from "react";
import { content } from "../../content/index";

export const InfoBanner: React.FC = () => {
	const [isClosed, setIsClosed] = useState(false);

	const handleClose = () => {
		setIsClosed(true);
	};

	if (isClosed) {
		return null;
	}

	return (
		<div className="relative top-4 lg:top-0 left-0 flex gap-6 justify-between items-center pl-5 py-4 pr-2 lg:py-5 lg:px-12 w-full text-dunkelblau-100 bg-hellblau-50 z-20">
			<div className="lg:max-w-[934px] mx-auto w-full flex flex-col lg:flex-row lg:justify-between gap-4 items-center mr-4 md:mr-auto">
				<div className="flex flex-col gap-1.5 w-full lg:w-fit">
					<h2 className="text-sm leading-5 font-semibold md:text-2xl md:leading-8">
						{content["info.banner.h2"]}
					</h2>
					<div>
						<p className="hidden md:block text-base leading-5 md:leading-6 font-normal">
							{content["info.banner.p1"]}
						</p>
						<p className="hidden md:block text-base leading-5 md:leading-6 font-normal">
							{content["info.banner.p2"]}
						</p>
						<p className="block md:hidden text-sm leading-5 md:leading-6 font-normal">
							{content["info.banner.p.mobile"]}
						</p>
					</div>
				</div>
				<a
					href={content["info.banner.link.href"]}
					aria-label={content["info.banner.link.ariaLabel"]}
					className={`
                                flex items-center h-11 text-white px-3 py-2
                                text-sm leading-5 md:text-lg md:leading-7 font-normal z-10 
                                rounded-[3px] bg-dunkelblau-100
                                hover:bg-dunkelblau-80 focus-outline-default
                                w-fit self-start lg:self-center lg:mr-6`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{content["info.banner.link.label"]}
				</a>
			</div>
			<button
				className="absolute top-4 right-4 lg:top-1/2 lg:-translate-y-1/2 lg:right-12 flex-shrink-0 focus-outline-default rounded-[3px] self-start lg:self-center cursor-pointer"
				onClick={handleClose}
				aria-label={content["info.banner.close.ariaLabel"]}
			>
				<img
					src="/icons/close-dark-blue-icon.svg"
					width={24}
					height={24}
					alt={content["closeIcon.blue.imgAlt"]}
				/>
			</button>
		</div>
	);
};
