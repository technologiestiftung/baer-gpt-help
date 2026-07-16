import { VideoItem } from "../accordion-content-elements/video-item";
import { content } from "../../content/index";
import { createSlug } from "~/utils/create-slug";
import { DownloadItem } from "../accordion-content-elements/download-item";
import { AnchorLink } from "../../components/accordion-content-elements/anhor-link";

export const topFaq = {
	questions: [
		{
			question: content["faq.section1.q1"],
			answer: (
				<div className="flex flex-col gap-5 lg:gap-9">
					<div>
						<p className="mb-3">{content["faq.section1.a1.p1"]}</p>
						<p>{content["faq.section1.a1.p2"]}</p>
					</div>
					<div>
						<h4 className="text-base leading-6 font-semibold">
							{content["faq.section1.a1.h4"]}
						</h4>
						<p>{content["faq.section1.a1.p3"]}</p>
					</div>
					<div>
						<h4 className="lg:px-3 text-base leading-6 font-semibold">
							{content["faq.furtherLinksVideos.title"]}
						</h4>
						<VideoItem
							title={content["faq.section1.a1.video1.title"]}
							href={`/${createSlug(content["faq.section1.a1.video1.linkName"])}`}
							hasBorder={false}
						/>
						<DownloadItem
							href={content["faq.section1.a1.link2.href"]}
							title={content["faq.section1.a1.link2.title"]}
							hasBorder={false}
							subtitle="PDF"
						/>
						<DownloadItem
							href={content["faq.section1.a1.link3.href"]}
							title={content["faq.section1.a1.link3.title"]}
							hasBorder={false}
							subtitle="PDF"
						/>
						<AnchorLink
							href={content["faq.section1.a1.link4.href"]}
							title={content["faq.section1.a1.link4.title"]}
						/>
					</div>
				</div>
			),
		},
		{
			question: content["faq.section1.q9"],
			answer: (
				<div className="flex flex-col gap-5 lg:gap-9">
					<ul className="list-decimal ml-6 text-base leading-6 font-normal flex gap- flex-col">
						<li
							dangerouslySetInnerHTML={{
								__html: content["faq.section1.a9.li1"],
							}}
						/>
						<li>{content["faq.section1.a9.li2"]}</li>
						<li>
							{content["faq.section1.a9.li3"]}
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section1.a9.li3.p1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section1.a9.li3.p2"],
									}}
								/>
							</ul>
						</li>

						<li>{content["faq.section1.a9.li4"]}</li>
					</ul>
					<div>
						<h4 className="lg:px-3 text-base leading-6 font-semibold">
							{content["faq.furtherLinksVideos.title"]}
						</h4>
						<AnchorLink
							href={content["faq.section1.a9.link.href"]}
							title={content["faq.section1.a9.link.title"]}
						/>
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
					</div>
				</div>
			),
		},
		{
			question: content["faq.section6.q1"],
			answer: (
				<div className="flex flex-col gap-5">
					<div>
						<p className="mb-3">{content["faq.section6.a1.p1.landingPage"]}</p>
						<p className="mb-3 font-semibold">
							{content["faq.section6.a1.p2"]}
						</p>
						<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
							<li>{content["faq.section6.a1.li1"]}</li>
							<li>{content["faq.section6.a1.li2"]}</li>
							<li>{content["faq.section6.a1.li3"]}</li>
						</ul>
						<DownloadItem
							href={content["faq.section6.a1.link2.href"]}
							title={content["faq.section6.a1.link2.title"]}
							subtitle="PDF"
						/>
					</div>
				</div>
			),
		},
		{
			question: content["faq.section5.q1"],
			answer: (
				<div className="flex flex-col gap-5 lg:gap-9">
					<div>
						<p className="mb-3">{content["faq.section5.a1.p1.landingPage"]}</p>
						<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
							<li
								dangerouslySetInnerHTML={{
									__html: content["faq.section5.a1.li1"],
								}}
							/>
							<li
								dangerouslySetInnerHTML={{
									__html: content["faq.section5.a1.li2"],
								}}
							/>
							<li
								dangerouslySetInnerHTML={{
									__html: content["faq.section5.a1.li3"],
								}}
							/>
						</ul>
					</div>
					<div>
						<h4 className="lg:px-3 text-base leading-6 font-semibold">
							{content["faq.furtherLinksVideos.title"]}
						</h4>
						<AnchorLink
							href={content["faq.section5.a1.link.href"]}
							title={content["faq.section5.a1.link.title"]}
							hasBorder={false}
						/>
					</div>
				</div>
			),
		},
		{
			question: content["about.section2.q2"],
			answer: (
				<div className="flex flex-col gap-3">
					<p>{content["about.section2.a2.p1"]}</p>
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
					</ul>
					<p>{content["about.section2.a2.p2"]}</p>
					<p
						dangerouslySetInnerHTML={{
							__html: content["about.section2.a2.p3"],
						}}
					/>
					<p>{content["about.section2.a2.p4"]}</p>
				</div>
			),
		},
	],
};
