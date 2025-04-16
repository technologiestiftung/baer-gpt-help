import { Accordion } from "../primitives/accordion/accordion";
import { PrimaryAnchorLink } from "../primitives/anchor-links/primary-anchor-link";
import { topFaq } from "./top-faq-content";
import { content } from "../../content";

export const TopFaq = () => {
	return (
		<div className="relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 px-5 py-[60px] md:py-20">
			<div className="flex flex-col gap-6 md:gap-5 lg:gap-12 w-full lg:max-w-[942px]">
				<h2 className="text-4xl leading-10 font-semibold text-center text-dunkelblau-200">
					{content["faq.title"]}
				</h2>
				<div className="flex flex-col gap-2.5">
					{topFaq.questions.map(({ question, answer }, qIndex) => (
						<Accordion key={qIndex} question={question} answer={answer} />
					))}
				</div>
			</div>
			<PrimaryAnchorLink href="/faq">
				{content["faq.button"]}
				<img src="/icons/arrow-right-icon-light.svg" alt="" />
			</PrimaryAnchorLink>
		</div>
	);
};
