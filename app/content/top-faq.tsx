import { VideoItem } from "../components/faq-content-elements/video-item";
import { content } from "./index";

export const topFaq = {
	questions: [
		{
			question: content["faq.top5.q1"],
			answer: content["faq.top5.a1"],
		},
		{
			question: content["faq.top5.q2"],
			answer: content["faq.top5.a2"],
		},
		{
			question: content["faq.section1.q2"],
			answer: (
				<div className="flex flex-col gap-5 lg:gap-9">
					<div>
						<p className="mb-3">{content["faq.section1.a2.p1"]}</p>
						<ul className="list-disc ml-6 text-base leading-6 font-normal">
							<li
								dangerouslySetInnerHTML={{
									__html: content["faq.section1.a2.li1"],
								}}
							/>
							<li
								dangerouslySetInnerHTML={{
									__html: content["faq.section1.a2.li2"],
								}}
							/>
						</ul>
						<p className="mt-3">{content["faq.section1.a2.p2"]}</p>
					</div>
					<div>
						<h4 className="px-3 text-base leading-6 font-semibold">
							{content["faq.section1.a2.h4"]}
						</h4>
						<VideoItem
							title={content["faq.section1.a2.video1.title"]}
							href={content["faq.section1.a2.video1.link"]}
						/>
						<VideoItem
							title={content["faq.section1.a2.video2.title"]}
							href={content["faq.section1.a2.video2.link"]}
						/>
						<VideoItem
							title={content["faq.section1.a2.video3.title"]}
							href={content["faq.section1.a2.video3.link"]}
						/>
						<p className="mt-3 italic">{content["faq.section1.a2.tip"]}</p>
					</div>
				</div>
			),
		},
		{
			question: content["faq.section3.q1"],
			answer: (
				<div className="flex flex-col gap-5 lg:gap-9">
					<div>
						<p className="mb-3">{content["faq.section3.a1.p1"]}</p>
						<ul className="list-disc ml-6 text-base leading-6 font-normal">
							<li
								dangerouslySetInnerHTML={{
									__html: content["faq.section3.a1.li1"],
								}}
							/>
							<li
								dangerouslySetInnerHTML={{
									__html: content["faq.section3.a1.li2"],
								}}
							/>
						</ul>
						<p className="mt-3 italic">{content["faq.section3.a1.p2"]}</p>
					</div>
					<div>
						<h4 className="px-3 text-base leading-6 font-semibold">
							{content["faq.section3.a1.h4"]}
						</h4>
						<VideoItem
							title={content["faq.section3.a1.video1.title"]}
							href={content["faq.section3.a1.video1.link"]}
						/>
					</div>
				</div>
			),
		},
		{
			question: content["faq.top5.q5"],
			answer: (
				<div className="flex flex-col gap-5 lg:gap-9">
					<div>
						<p className="mb-3">{content["faq.top5.a5.p1"]}</p>
					</div>
					<div>
						<h4 className="px-3 text-base leading-6 font-semibold">
							{content["faq.top5.a5.h4"]}
						</h4>
						<VideoItem
							title={content["faq.top5.a5.video1.title"]}
							href={content["faq.top5.a5.video1.link"]}
						/>
					</div>
				</div>
			),
		},
	],
};
