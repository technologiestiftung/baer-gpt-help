import { AnchorLink } from "../../components/accordion-content-elements/anhor-link";
import { content } from "../../content/index";

export const about = {
	sections: [
		{
			title: content["about.section1.title"],
			questions: [
				{
					question: content["about.section1.q1"],
					answer: (
						<div className="flex flex-col gap-3">
							<p>{content["about.section1.a1.p1"]}</p>
							<p>{content["about.section1.a1.p2"]}</p>
						</div>
					),
				},
				{
					question: content["about.section1.q2"],
					answer: (
						<div className="flex flex-col gap-3">
							<p>{content["about.section1.a2.p1"]}</p>
							<p>{content["about.section1.a2.p2"]}</p>
						</div>
					),
				},
				{
					question: content["about.section1.q3"],
					answer: (
						<div className="flex flex-col gap-3">
							<p>{content["about.section1.a3.p1"]}</p>
							<p className="font-semibold">
								{content["about.section1.a3.p2.1"]}
							</p>
							<p>{content["about.section1.a3.p2.2"]}</p>
							<p className="font-semibold">
								{content["about.section1.a3.p3.1"]}
							</p>
							<p>{content["about.section1.a3.p3.2"]}</p>
							<p>{content["about.section1.a3.p3.3"]}</p>
							<AnchorLink
								href={content["about.section1.a3.link.href"]}
								title={content["about.section1.a3.link.title"]}
								hasBorder={false}
							/>
						</div>
					),
				},
				{
					question: content["about.section1.q4"],
					answer: (
						<div className="flex flex-col gap-3">
							<p>{content["about.section1.a4.p1"]}</p>
							<div>
								<p className="font-semibold">
									{content["about.section1.a4.p2"]}
								</p>
								<AnchorLink
									href={content["about.section1.a4.link.href"]}
									title={content["about.section1.a4.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["about.section1.q5"],
					answer: content["about.section1.a5.p1"],
				},
				{
					question: content["about.section1.q6"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p
								dangerouslySetInnerHTML={{
									__html: content["about.section1.a6.p1"],
								}}
							/>
						</div>
					),
				},
			],
		},
		{
			title: content["about.section2.title"],
			questions: [
				{
					question: content["about.section2.q1"],
					answer: (
						<div className="flex flex-col gap-3">
							<p>{content["about.section2.a1.p1"]}</p>
							<p>{content["about.section2.a1.p2"]}</p>
							<p>{content["about.section2.a1.p3"]}</p>
							<p
								dangerouslySetInnerHTML={{
									__html: content["about.section2.a1.p4"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["about.section2.a1.p5"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["about.section2.a1.p6"],
								}}
							/>
							<p>{content["about.section2.a1.p7"]}</p>
						</div>
					),
				},
			],
		},
	],
};
