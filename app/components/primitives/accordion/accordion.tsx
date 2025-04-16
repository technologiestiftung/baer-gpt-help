import React, { useState } from "react";
import { content } from "../../../content";

type AccordionProps = {
	question: string;
	answer: string | React.ReactNode;
	openByDefault?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
	question,
	answer,
	openByDefault = false,
}) => {
	const [isExpanded, setIsExpanded] = useState(openByDefault);

	return (
		<div className="w-full p-4 bg-hellblau-50 rounded-[3px] hover:bg-hellblau-60">
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="w-full flex justify-between items-center text-left cursor-pointer focus-outline-default"
			>
				<h3 className="text-base leading-6 font-semibold md:text-xl md:leading-7">
					{question}
				</h3>
				<span className="ml-4 min-w-6">
					{isExpanded ? (
						<img
							src="/icons/chevron-up-icon.svg"
							alt={content["faq.accordion.chevronUpAltText"]}
						/>
					) : (
						<img
							src="/icons/chevron-down-icon.svg"
							alt={content["faq.accordion.chevronDownAltText"]}
						/>
					)}
				</span>
			</button>
			{isExpanded && (
				<div className="max-w-[679px] mt-5 lg:mt-8 text-base leading-6 font-normal">
					{answer}
				</div>
			)}
		</div>
	);
};
