import { DownloadItem } from "../../components/accordion-content-elements/download-item";
import { AnchorLink } from "../../components/accordion-content-elements/anhor-link";
import { VideoItem } from "../../components/accordion-content-elements/video-item";
import { content } from "../../content/index";
import { createSlug } from "~/utils/create-slug";

export const faq = {
	sections: [
		{
			title: content["faq.section1.title"],
			questions: [
				{
					question: content["faq.section1.q1"],
					answer: content["faq.section1.a1"],
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
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.section1.a2.h4"]}
								</h4>
								<VideoItem
									title={content["faq.section1.a2.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a2.video1.linkName"])}`}
								/>
								<VideoItem
									title={content["faq.section1.a2.video2.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a2.video2.linkName"])}`}
								/>
								<VideoItem
									title={content["faq.section1.a2.video3.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a2.video3.linkName"])}`}
									hasBorder={false}
								/>
								<p className="mt-3 italic">{content["faq.section1.a2.tip"]}</p>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: content["faq.section2.title"],
			questions: [
				{
					question: content["faq.section2.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							{content["faq.section2.a1"]}
							<div>
								<DownloadItem
									href={content["faq.section2.a1.link1.link"]}
									subtitle="PDF"
									title={content["faq.section2.a1.link1.title"]}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section2.q2"],
					answer: content["faq.section2.a2"],
				},
				{
					question: content["faq.section2.q3"],
					answer: content["faq.section2.a3"],
				},
				{
					question: content["faq.section2.q4"],
					answer: content["faq.section2.a4"],
				},
				{
					question: content["faq.section2.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>{content["faq.section2.a5.p1"]}</p>
								<p className="my-3">{content["faq.section2.a5.p2"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section2.a5.li1"]}</li>
									<li>{content["faq.section2.a5.li2"]}</li>
									<li>{content["faq.section2.a5.li3"]}</li>
								</ul>
								<p className="mt-3">{content["faq.section2.a5.p3"]}</p>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section2.q6"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section2.a6.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section2.a6.li1"]}</li>
								<li>{content["faq.section2.a6.li2"]}</li>
								<li>{content["faq.section2.a6.li3"]}</li>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section2.q7"],
					answer: content["faq.section2.a7"],
				},
				{
					question: content["faq.section2.q8"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>{content["faq.section2.a8.p1"]}</p>
						</div>
					),
				},
			],
		},
		{
			title: content["faq.section3.title"],
			questions: [
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
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.section3.a1.h4"]}
								</h4>
								<VideoItem
									title={content["faq.section3.a1.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section3.a1.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section3.q2"],
					answer: content["faq.section3.a2"],
				},
				{
					question: content["faq.section3.q3"],
					answer: content["faq.section3.a3"],
				},
				{
					question: content["faq.section3.q4"],
					answer: content["faq.section3.a4"],
				},
				{
					question: content["faq.section3.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section3.a5.p1"]}</p>
								<p className="mb-3">{content["faq.section3.a5.p2"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section3.a5.li1"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section3.a5.li2"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section3.a5.li3"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section3.a5.li4"],
										}}
									/>
								</ul>
								<p className="mt-3 italic">{content["faq.section3.a5.p3"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.section3.a5.h4"]}
								</h4>
								<VideoItem
									title={content["faq.section3.a5.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section3.a5.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section3.q6"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>{content["faq.section3.a6.p1"]}</p>
							<div>
								<h4 className="lg:px-3 pt-3 text-base leading-6 font-semibold">
									{content["faq.section3.a6.h4"]}
								</h4>
								<VideoItem
									title={content["faq.section3.a6.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section3.a6.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section3.q7"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a7.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section3.a7.li1"]}</li>
								<li>{content["faq.section3.a7.li2"]}</li>
								<li>{content["faq.section3.a7.li3"]}</li>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section3.q8"],
					answer: content["faq.section3.a8"],
				},
				{
					question: content["faq.section3.q9"],
					answer: content["faq.section3.a9"],
				},
			],
		},
		{
			title: content["faq.section4.title"],
			questions: [
				{
					question: content["faq.section4.q1"],
					answer: content["faq.section4.a1"],
				},
				{
					question: content["faq.section4.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>{content["faq.section4.a2.p1"]}</p>
							<div>
								<h4 className="lg:px-3 pt-3 text-base leading-6 font-semibold">
									{content["faq.section4.a2.h4"]}
								</h4>
								<VideoItem
									title={content["faq.section4.a2.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section4.a2.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: content["faq.section5.title"],
			questions: [
				{
					question: content["faq.section5.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>{content["faq.section5.a1.p1"]}</p>
							<div>
								<h4 className="lg:px-3 pt-3 text-base leading-6 font-semibold">
									{content["faq.section5.a1.h4"]}
								</h4>
								<VideoItem
									title={content["faq.section5.a1.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section5.a1.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section5.q2"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section5.a2.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section5.a2.li1"]}</li>
								<li>{content["faq.section5.a2.li2"]}</li>
								<li>{content["faq.section5.a2.li3"]}</li>
								<li>{content["faq.section5.a2.li4"]}</li>
							</ul>
						</div>
					),
				},
			],
		},
		{
			title: content["faq.section6.title"],
			questions: [
				{
					question: content["faq.section6.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<span>
								{content["faq.section6.a1.p1"]}
								<a
									href={`mailto:${content["faq.section6.a1.email"]}`}
									rel="noopener noreferrer"
									title={content["faq.section6.a1.email"]}
									className="underline decoration-1 underline-offset-4 focus-outline-default"
								>
									{content["faq.section6.a1.email"]}
								</a>
							</span>

							<div>
								<h4 className="lg:px-3 pt-3 text-base leading-6 font-semibold">
									{content["faq.section6.a1.h4"]}{" "}
								</h4>
								<div className="lg:px-3 py-3">
									<AnchorLink
										href={content["faq.section6.a1.link1.href"]}
										rel="noopener noreferrer"
										title={content["faq.section6.a1.link1.title"]}
									/>
								</div>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>{content["faq.section6.a2.p1"]}</p>
								<p>{content["faq.section6.a2.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 pt-3 text-base leading-6 font-semibold">
									{content["faq.section6.a2.h4"]}
								</h4>
								<div className="lg:px-3 py-3">
									<DownloadItem
										href={content["faq.section6.a2.link1.href"]}
										subtitle="PDF"
										title={content["faq.section6.a2.link1.title"]}
									/>
								</div>
							</div>
						</div>
					),
				},
			],
		},
	],
};
