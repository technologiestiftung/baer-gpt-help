// import { DownloadItem } from "../../components/accordion-content-elements/download-item";
import { DownloadItem } from "~/components/accordion-content-elements/download-item";
import { AnchorLink } from "../../components/accordion-content-elements/anhor-link";
import { VideoItem } from "../../components/accordion-content-elements/video-item";
import { content } from "../../content/index";
import { createSlug } from "~/utils/create-slug";

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
							<div>
								<p className="font-semibold">
									{content["about.section1.a3.p2"]}
								</p>
								<AnchorLink
									href={content["about.section1.a3.link.href"]}
									title={content["about.section1.a3.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["about.section1.q4"],
					answer: content["about.section1.a4"],
				},
				{
					question: content["about.section1.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p
								dangerouslySetInnerHTML={{
									__html: content["about.section1.a5.p1"],
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
							<p>{content["about.section2.a1.p6"]}</p>
							<p
								dangerouslySetInnerHTML={{
									__html: content["about.section2.a1.p7"],
								}}
							/>
							<p>{content["about.section2.a1.p8"]}</p>
						</div>
					),
				},
				{
					question: content["about.section2.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<img
								src="/images/baergpt_infrastructure.jpg"
								alt="Team Photo"
								className="rounded-lg"
							/>
							<p>{content["about.section2.a2.p1"]}</p>
							<div>
								<p className="mb-3">{content["about.section2.a2.p2"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li
										dangerouslySetInnerHTML={{
											__html: content["about.section2.a2.li1"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["about.section2.a2.li2"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["about.section2.a2.li3"],
										}}
									/>
								</ul>
							</div>
						</div>
					),
				},
			],
		},
	],
};
