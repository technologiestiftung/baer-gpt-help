import { AboutHero } from "~/components/about-hero/about-hero";
import { about } from "./about";
import { Accordion } from "../../components/primitives/accordion/accordion";
import { createSlug } from "~/utils/create-slug";

export default function Index() {
	return (
		<div className="text-dunkelblau-200">
			<AboutHero />
			<div className="flex flex-col px-5 lg:px-[50px] lg:py-20 md:py-[60px] py-10 gap-[60px] lg:gap-20 max-w-[1412px] mx-auto">
				<div className="flex flex-col gap-10 lg:gap-16">
					{about.sections.map((section, index) => (
						<div key={index}>
							<h2
								id={createSlug(section.title)}
								className="mb-5 md:mb-6 text-xl scroll-mt-[85px] leading-7 font-semibold md:text-3xl md:leading-9 lg:text-4xl lg:leading-10"
							>
								{section.title}
							</h2>
							<div className="flex flex-col gap-2.5">
								{section.questions.map(({ question, answer }, qIndex) => (
									<Accordion key={qIndex} question={question} answer={answer} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
