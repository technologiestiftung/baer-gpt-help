import { Accordion } from "../../components/primitives/accordion/accordion";
import { content } from "../../content";
import { faq } from "../../content/faq";

export default function Index() {
	return (
		<div className="mb-[60px] lg:mb-[100px]">
			<h1 className="py-20 text-6xl leading-none font-semibold">
				{content["faq.title"]}
			</h1>
			<div className="flex flex-col gap-10 lg:gap-16">
				{faq.sections.map((section, index) => (
					<div key={index} className="flex flex-col gap-2.5">
						<h2 className="mb-6 text-4xl font-semibold">{section.title}</h2>
						{section.questions.map(({ question, answer }, qIndex) => (
							<Accordion key={qIndex} question={question} answer={answer} />
						))}
					</div>
				))}
			</div>
		</div>
	);
}
