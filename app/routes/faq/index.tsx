import { Accordion } from "../../components/primitives/accordion/accordion";
import { content } from "../../content";
import { faq } from "../../content/faq";

export default function Index() {
	return (
		<div className="mb-[60px] lg:mb-[100px]">
			<h1 className="py-10 md:py-[60px]lg:py-20 text-4xl leading-10 font-semibold md:text-6xl md:leading-none">
				{content["faq.title"]}
			</h1>
			<div className="flex flex-col gap-10 lg:gap-16">
				{faq.sections.map((section, index) => (
					<div key={index} className="flex flex-col gap-2.5">
						<h2 className="mb-5 md:mb-6 text-3xl leading-9 font-semibold md:text-4xl md:leading-10">
							{section.title}
						</h2>
						{section.questions.map(({ question, answer }, qIndex) => (
							<Accordion key={qIndex} question={question} answer={answer} />
						))}
					</div>
				))}
			</div>
		</div>
	);
}
