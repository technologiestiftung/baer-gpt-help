import React, { useState, useEffect } from "react";
import { content } from "../../../content";
import { createSlug } from "~/utils/create-slug";

type AccordionProps = {
	question: string;
	answer: string | React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const questionSlug = createSlug(question);
		if (window.location.hash === `#${questionSlug}`) {
			setIsExpanded(true);
		}
	}, [question]);

	return (
		<div
			className="w-full bg-hellblau-50 rounded-[3px] hover:bg-hellblau-60 scroll-mt-[85px]"
			id={createSlug(question)}
		>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="p-4 w-full flex justify-between items-center text-left cursor-pointer focus-outline-default"
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
				<div className="max-w-[679px] px-4 pb-4 md:pr-0 mt-1 lg:mt-8 text-base leading-6 font-normal">
					{answer}
				</div>
			)}
		</div>
	);
};
