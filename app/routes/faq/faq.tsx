import { DownloadItem } from "~/components/accordion-content-elements/download-item";
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
					question: content["faq.section1.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p className="mb-3">{content["faq.section1.a2.p1"]}</p>
							<p className="mb-3">{content["faq.section1.a2.p2"]}</p>
							<p>{content["faq.section1.a2.p3"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section1.q3"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section1.a3.p1"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section1.a3.li1"]}</li>
									<li>{content["faq.section1.a3.li2"]}</li>
									<li>{content["faq.section1.a3.li3"]}</li>
									<li>{content["faq.section1.a3.li4"]}</li>
									<li>{content["faq.section1.a3.li5"]}</li>
									<li>{content["faq.section1.a3.li6"]}</li>
								</ul>
								<p className="mt-3">{content["faq.section1.a3.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section1.a3.link.href"]}
									title={content["faq.section1.a3.link.title"]}
									hasBorder={false}
								/>
								<VideoItem
									title={content["faq.section1.a3.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a3.video1.linkName"])}`}
									hasBorder={false}
								/>
								<VideoItem
									title={content["faq.section1.a3.video2.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a3.video2.linkName"])}`}
									hasBorder={false}
								/>
								<VideoItem
									title={content["faq.section1.a3.video3.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a3.video3.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section1.q4"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section1.a4.p1"]}</p>
							<p className="mb-3">{content["faq.section1.a4.p2"]}</p>
							<p>{content["faq.section1.a4.p3"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section1.q5"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section1.a5.p1"]}</p>
							<p className="mb-3">{content["faq.section1.a5.p2"]}</p>
							<ul className="ml-6 text-base leading-6 font-normal list-decimal">
								<li>{content["faq.section1.a5.li1"]}</li>
								<li>{content["faq.section1.a5.li2"]}</li>
								<li>{content["faq.section1.a5.li3"]}</li>
								<li>{content["faq.section1.a5.li4"]}</li>
							</ul>
							<div className="mt-5">
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<DownloadItem
									href={content["faq.section1.a5.link1.href"]}
									title={content["faq.section1.a5.link1.title"]}
									subtitle="PDF"
									hasBorder={false}
								/>
								<VideoItem
									title={content["faq.section1.a5.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a5.video1.linkName"])}`}
									hasBorder={false}
								/>
								<AnchorLink
									href={content["faq.section1.a5.link2.href"]}
									title={content["faq.section1.a5.link2.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section1.q6"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section1.a6.p1"]}</p>
							<p>{content["faq.section1.a6.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section1.q7"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>{content["faq.section1.a7"]}</p>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<DownloadItem
									href={content["faq.section1.a7.link.href"]}
									title={content["faq.section1.a7.link.title"]}
									subtitle="PDF"
									hasBorder={false}
								/>
								<DownloadItem
									href={content["faq.section1.a7.link2.href"]}
									title={content["faq.section1.a7.link2.title"]}
									subtitle="PDF"
									hasBorder={false}
								/>
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
						<div>
							<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section2.a1.li1"],
									}}
								/>
								<li>{content["faq.section2.a1.li2"]}</li>
								<li>{content["faq.section2.a1.li3"]}</li>
								<li>{content["faq.section2.a1.li4"]}</li>
								<li>{content["faq.section2.a1.li5"]}</li>
							</ol>
							<p>{content["faq.section2.a1.p1"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section2.q2"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section2.a2.p1"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section2.a2.h4.1"]}
							</h4>
							<p className="mb-3">{content["faq.section2.a2.p2"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section2.a2.h4.2"]}
							</h4>
							<p className="mb-3">{content["faq.section2.a2.p3"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section2.a2.h4.3"]}
							</h4>
							<p>{content["faq.section2.a2.p4"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section2.q3"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section2.a3.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section2.a3.li1"]}</li>
								<li>{content["faq.section2.a3.li2"]}</li>
								<li>{content["faq.section2.a3.li3"]}</li>
							</ul>
							<p>{content["faq.section2.a3.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section2.q4"],
					answer: (
						<div>
							<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section2.a4.li1"]}</li>
								<li>{content["faq.section2.a4.li2"]}</li>
								<li>{content["faq.section2.a4.li3"]}</li>
							</ol>
							<p>{content["faq.section2.a4.p1"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section2.q5"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section2.a5.p1"]}</p>
							<p className="mb-3">{content["faq.section2.a5.p2"]}</p>
							<p>{content["faq.section2.a5.p3"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section2.q6"],
					answer: (
						<div>
							<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section2.a6.li1"]}</li>
								<li>{content["faq.section2.a6.li2"]}</li>
								<li>{content["faq.section2.a6.li3"]}</li>
								<li>{content["faq.section2.a6.li4"]}</li>
								<li>{content["faq.section2.a6.li5"]}</li>
							</ol>
							<p>{content["faq.section2.a6.p1"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section2.q7"],
					answer: (
						<ol className="list-decimal ml-6 text-base leading-6 font-normal">
							<li>{content["faq.section2.a7.li1"]}</li>
							<li>{content["faq.section2.a7.li2"]}</li>
							<li>{content["faq.section2.a7.li3"]}</li>
							<li>{content["faq.section2.a7.li4"]}</li>
						</ol>
					),
				},
				{
					question: content["faq.section2.q8"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section2.a8.p1"]}</p>
								<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section2.a8.li1"]}</li>
									<li>{content["faq.section2.a8.li2"]}</li>
									<li>{content["faq.section2.a8.li3"]}</li>
									<li>{content["faq.section2.a8.li4"]}</li>
									<li>{content["faq.section2.a8.li5"]}</li>
								</ol>
								<p>{content["faq.section2.a8.p2"]}</p>
							</div>
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
								<p className="mb-3">{content["faq.section3.a1.p2"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section3.a1.li1"]}</li>
									<li>{content["faq.section3.a1.li2"]}</li>
									<li>{content["faq.section3.a1.li3"]}</li>
									<li>{content["faq.section3.a1.li4"]}</li>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<VideoItem
									title={content["faq.section3.a1.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section3.a1.video1.linkName"])}`}
									hasBorder={false}
								/>
								<AnchorLink
									href={content["faq.section3.a1.link1.href"]}
									title={content["faq.section3.a1.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section3.q2"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a2.p1"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section3.a2.h4"]}
							</h4>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section3.a2.li1"]}</li>
								<li>{content["faq.section3.a2.li2"]}</li>
								<li>{content["faq.section3.a2.li3"]}</li>
							</ul>
							<p>{content["faq.section3.a2.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section3.q3"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a3.p1"]}</p>
							<p className="mb-3">{content["faq.section3.a3.p2"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section3.a3.li1"]}</li>
								<li>{content["faq.section3.a3.li2"]}</li>
								<li>{content["faq.section3.a3.li3"]}</li>
								<li>{content["faq.section3.a3.li4"]}</li>
							</ul>
							<p>{content["faq.section3.a3.p3"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section3.q4"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a4.p1"]}</p>
							<p>{content["faq.section3.a4.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section3.q5"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a5.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section3.a5.li1"]}</li>
								<li>{content["faq.section3.a5.li2"]}</li>
							</ul>
							<p>{content["faq.section3.a5.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section3.q6"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a6.p1"]}</p>
							<p>{content["faq.section3.a6.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section3.q7"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a7.p1"]}</p>
							<p className="mb-3">{content["faq.section3.a7.p2"]}</p>
							<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section3.a7.li1"]}</li>
								<li>{content["faq.section3.a7.li2"]}</li>
								<li>{content["faq.section3.a7.li3"]}</li>
								<li>{content["faq.section3.a7.li4"]}</li>
							</ol>
							<p
								dangerouslySetInnerHTML={{
									__html: content["faq.section3.a7.p3"],
								}}
							/>
						</div>
					),
				},
			],
		},
		{
			title: content["faq.section4.title"],
			questions: [
				{
					question: content["faq.section4.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section4.a1.li1"]}</li>
									<li>{content["faq.section4.a1.li2"]}</li>
									<li>{content["faq.section4.a1.li3"]}</li>
								</ol>
								<p className="mb-3">{content["faq.section4.a1.p2"]}</p>
								<p>{content["faq.section4.a1.p3"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<VideoItem
									title={content["faq.section4.a1.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section4.a1.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section4.q2"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a2.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a2.li1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a2.li2"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a2.li3"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a2.li4"],
									}}
								/>
							</ul>
							<p className="mb-3">{content["faq.section4.a2.p2"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a2.li5"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a2.li6"],
									}}
								/>
							</ul>
							<p>{content["faq.section4.a2.p3"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section4.q3"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a3.p1"]}</p>
							<p>{content["faq.section4.a3.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section4.q4"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a4.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section4.a4.li1"]}</li>
								<li>{content["faq.section4.a4.li2"]}</li>
								<li>{content["faq.section4.a4.li3"]}</li>
								<li>{content["faq.section4.a4.li4"]}</li>
								<li>{content["faq.section4.a4.li5"]}</li>
							</ul>
							<p
								dangerouslySetInnerHTML={{
									__html: content["faq.section4.a4.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["faq.section4.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section4.a5.p1"]}</p>
								<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section4.a5.li1"]}</li>
									<li>{content["faq.section4.a5.li2"]}</li>
									<li>{content["faq.section4.a5.li3"]}</li>
								</ol>
								<p className="mb-3">{content["faq.section4.a5.p2"]}</p>
								<p>{content["faq.section4.a5.p3"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section4.a5.link1.href"]}
									title={content["faq.section4.a5.link1.title"]}
									hasBorder={false}
								/>
								<VideoItem
									title={content["faq.section4.a5.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section4.a5.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section4.q6"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a6.p1"]}</p>
							<p>{content["faq.section4.a6.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section4.q7"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a7.p1"]}</p>
							<p>{content["faq.section4.a7.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section4.q8"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a8.p1"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section4.a8.h4.1"]}
							</h4>
							<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section4.a8.li1"]}</li>
								<li>{content["faq.section4.a8.li2"]}</li>
								<li>{content["faq.section4.a8.li3"]}</li>
							</ol>
							<p className="mb-3">{content["faq.section4.a8.p2"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section4.a8.h4.2"]}
							</h4>
							<p className="mb-3">{content["faq.section4.a8.p3"]}</p>
							<p
								className="mb-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section4.a8.p4"],
								}}
							/>
							<p
								className="mb-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section4.a8.p5"],
								}}
							/>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section4.a8.h4.3"]}
							</h4>
							<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section4.a8.li4"]}</li>
								<li>{content["faq.section4.a8.li5"]}</li>
								<li>{content["faq.section4.a8.li6"]}</li>
							</ol>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section4.a8.link1.href"]}
									title={content["faq.section4.a8.link1.title"]}
									hasBorder={false}
								/>
								<AnchorLink
									href={content["faq.section4.a8.link2.href"]}
									title={content["faq.section4.a8.link2.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section4.q9"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a9.p1"]}</p>
							<p>{content["faq.section4.a9.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section4.q10"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a10.p1"]}</p>
							<p>{content["faq.section4.a10.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section4.q11"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a11.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section4.a11.li1"]}</li>
								<li>{content["faq.section4.a11.li2"]}</li>
								<li>{content["faq.section4.a11.li3"]}</li>
								<li>{content["faq.section4.a11.li4"]}</li>
							</ul>
							<p
								dangerouslySetInnerHTML={{
									__html: content["faq.section4.a11.p2"],
								}}
							/>
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
							<div>
								<p className="mb-3">{content["faq.section5.a1.p1"]}</p>
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
									{/* <li
										dangerouslySetInnerHTML={{
											__html: content["faq.section5.a1.li4"],
										}}
									/> */}
									{/* <li
										dangerouslySetInnerHTML={{
											__html: content["faq.section5.a1.li5"],
										}}
									/> */}
								</ul>
								<p>{content["faq.section5.a1.p2"]}</p>
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
					question: content["faq.section5.q2"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section5.a2.p1"]}</p>
							<p className="mb-3">{content["faq.section5.a2.p2"]}</p>
							<p className="mb-3">{content["faq.section5.a2.p3"]}</p>
							<p className="mb-3">{content["faq.section5.a2.p4"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section5.a2.h4"]}
							</h4>
							<p
								dangerouslySetInnerHTML={{
									__html: content["faq.section5.a2.p5"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["faq.section5.q3"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section5.a3.p1"]}</p>
							<p className="mb-3">{content["faq.section5.a3.p2"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section5.a3.li1"]}</li>
								<li>{content["faq.section5.a3.li2"]}</li>
								<li>{content["faq.section5.a3.li3"]}</li>
							</ul>
							{/* <p className="mb-3">{content["faq.section5.a3.p3"]}</p> */}
							<p className="mb-3">{content["faq.section5.a3.p4"]}</p>
							<p>{content["faq.section5.a3.p5"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section5.q4"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section5.a4.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a4.li1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a4.li2"],
									}}
								/>
								{/* <li
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a4.li3"],
									}}
								/> */}
							</ul>
							<p>{content["faq.section5.a4.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section5.q5"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section5.a5.p1"]}</p>
							<p className="mb-3">{content["faq.section5.a5.p2"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section5.a5.li1"]}</li>
								<li>{content["faq.section5.a5.li2"]}</li>
								<li>{content["faq.section5.a5.li3"]}</li>
								<li>{content["faq.section5.a5.li4"]}</li>
								<li>{content["faq.section5.a5.li5"]}</li>
							</ul>
							<p className="mb-3">{content["faq.section5.a5.p3"]}</p>
							<p>{content["faq.section5.a5.p4"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section5.q6"],
					answer: (
						<div>
							<ol className="list-decimal ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section5.a6.li1"]}</li>
								<li>{content["faq.section5.a6.li2"]}</li>
								<li>{content["faq.section5.a6.li3"]}</li>
								<li>{content["faq.section5.a6.li4"]}</li>
								<li>{content["faq.section5.a6.li5"]}</li>
							</ol>
							<p>{content["faq.section5.a6.p1"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section5.q7"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section5.a7.p1"]}</p>
							<p className="mb-3">{content["faq.section5.a7.p2"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section5.a7.li1"]}</li>
								<li>{content["faq.section5.a7.li2"]}</li>
								<li>{content["faq.section5.a7.li3"]}</li>
								<li>{content["faq.section5.a7.li4"]}</li>
							</ul>
							<p>{content["faq.section5.a7.p3"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section5.q8"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section5.a8.p1"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section5.a8.li1"]}</li>
									<li>{content["faq.section5.a8.li2"]}</li>
									<li>{content["faq.section5.a8.li3"]}</li>
									<li>{content["faq.section5.a8.li4"]}</li>
									<li>{content["faq.section5.a8.li5"]}</li>
								</ul>
								<h4 className="text-base leading-6 font-semibold mb-2">
									{content["faq.section5.a8.h4"]}
								</h4>
								<p className="mb-3">{content["faq.section5.a8.p2"]}</p>
								<p className="mb-3">{content["faq.section5.a8.p3"]}</p>
								<p className="mb-3">{content["faq.section5.a8.p4"]}</p>
								<p className="mb-3">{content["faq.section5.a8.p5"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section5.a8.li6"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section5.a8.li7"],
										}}
									/>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section5.a8.link1.href"]}
									title={content["faq.section5.a8.link1.title"]}
									hasBorder={false}
								/>
								<AnchorLink
									href={content["faq.section5.a8.link2.href"]}
									title={content["faq.section5.a8.link2.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section5.q9"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section5.a9.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li>{content["faq.section5.a9.li1"]}</li>
								<li>{content["faq.section5.a9.li2"]}</li>
								<li>{content["faq.section5.a9.li3"]}</li>
								<li>{content["faq.section5.a9.li4"]}</li>
								<li>{content["faq.section5.a9.li5"]}</li>
							</ul>
							<p>{content["faq.section5.a9.p2"]}</p>
						</div>
					),
				},
				// {
				// 	question: content["faq.section5.q10"],
				// 	answer: (
				// 		<div>
				// 			<p className="mb-3">{content["faq.section5.a10.p1"]}</p>
				// 			<p>{content["faq.section5.a10.p2"]}</p>
				// 		</div>
				// 	),
				// },
				{
					question: content["faq.section5.q11"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section5.a11.p1"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section5.a11.li1"]}</li>
									<li>{content["faq.section5.a11.li2"]}</li>
									<li>{content["faq.section5.a11.li3"]}</li>
									<li>{content["faq.section5.a11.li4"]}</li>
								</ul>
								<p>{content["faq.section5.a11.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section5.a11.link1.href"]}
									title={content["faq.section5.a11.link1.title"]}
									hasBorder={false}
								/>
								<AnchorLink
									href={content["faq.section5.a11.link2.href"]}
									title={content["faq.section5.a11.link2.title"]}
									hasBorder={false}
								/>
								<AnchorLink
									href={content["faq.section5.a11.link3.href"]}
									title={content["faq.section5.a11.link3.title"]}
									hasBorder={false}
								/>
							</div>
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
							<div>
								<p className="mb-3">{content["faq.section6.a1.p1"]}</p>
								<p className="mb-3 font-semibold">
									{content["faq.section6.a1.p2"]}
								</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section6.a1.li1"]}</li>
									<li>{content["faq.section6.a1.li2"]}</li>
									<li>{content["faq.section6.a1.li3"]}</li>
									<li>{content["faq.section6.a1.li4"]}</li>
								</ul>
								<p className="mb-3">{content["faq.section6.a1.p3"]}</p>
								<p>{content["faq.section6.a1.p4"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section6.a1.link1.href"]}
									title={content["faq.section6.a1.link1.title"]}
									hasBorder={false}
								/>
								<DownloadItem
									href={content["faq.section6.a1.link2.href"]}
									title={content["faq.section6.a1.link2.title"]}
									subtitle="PDF"
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section6.a2.p1"]}</p>
								<p>{content["faq.section6.a2.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section6.a2.link1.href"]}
									title={content["faq.section6.a2.link1.title"]}
									hasBorder={false}
								/>
								<DownloadItem
									href={content["faq.section6.a2.link2.href"]}
									title={content["faq.section6.a2.link2.title"]}
									subtitle="PDF"
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q3"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section6.a3.p1"]}</p>
								<p>{content["faq.section6.a3.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section6.a3.link1.href"]}
									title={content["faq.section6.a3.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q4"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section6.a4.p1"]}</p>
								<p>{content["faq.section6.a4.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section6.a4.link1.href"]}
									title={content["faq.section6.a4.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section6.a5.p1"]}</p>
								<p>{content["faq.section6.a5.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section6.a5.link1.href"]}
									title={content["faq.section6.a5.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q6"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section6.a6.p1"]}</p>
								<p>{content["faq.section6.a6.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section6.a6.link1.href"]}
									title={content["faq.section6.a6.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q7"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section6.a7.p1"]}</p>
								<p>{content["faq.section6.a7.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section6.a7.link1.href"]}
									title={content["faq.section6.a7.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: content["faq.section7.title"],
			questions: [
				{
					question: content["faq.section7.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section7.a1.p1"]}</p>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a1.p2"],
									}}
								/>
								<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section7.a1.li1"]}</li>
									<li>{content["faq.section7.a1.li2"]}</li>
									<li>{content["faq.section7.a1.li3"]}</li>
								</ul>
								<p>{content["faq.section7.a1.p3"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section7.a1.link1.href"]}
									title={content["faq.section7.a1.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section7.q2"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section7.a2.p1"]}</p>
							<p className="mb-3">{content["faq.section7.a2.p2"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section7.a2.li1"]}</li>
								<li>{content["faq.section7.a2.li2"]}</li>
								<li>{content["faq.section7.a2.li3"]}</li>
								<li>{content["faq.section7.a2.li4"]}</li>
								<li>{content["faq.section7.a2.li5"]}</li>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section7.q3"],
					answer: (
						<div>
							<h4 className="lg:px-3 text-base leading-6 font-semibold mb-3">
								{content["faq.furtherLinksVideos.title"]}
							</h4>
							<AnchorLink
								href={content["faq.section7.a3.link1.href"]}
								title={content["faq.section7.a3.link1.title"]}
								hasBorder={false}
							/>
							<DownloadItem
								href={content["faq.section7.a3.link2.href"]}
								title={content["faq.section7.a3.link2.title"]}
								subtitle="PDF"
								hasBorder={false}
							/>
							<AnchorLink
								href={content["faq.section7.a3.link3.href"]}
								title={content["faq.section7.a3.link3.title"]}
								hasBorder={false}
							/>
							<AnchorLink
								href={content["faq.section7.a3.link4.href"]}
								title={content["faq.section7.a3.link4.title"]}
								hasBorder={false}
							/>
							<AnchorLink
								href={content["faq.section7.a3.link5.href"]}
								title={content["faq.section7.a3.link5.title"]}
								hasBorder={false}
							/>
							<AnchorLink
								href={content["faq.section7.a3.link6.href"]}
								title={content["faq.section7.a3.link6.title"]}
								hasBorder={false}
							/>
						</div>
					),
				},
				{
					question: content["faq.section7.q4"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>{content["faq.section7.a4.p1"]}</p>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section7.a4.link1.href"]}
									title={content["faq.section7.a4.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section7.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section7.a5.p1"]}</p>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a5.p2"],
									}}
								/>
								<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section7.a5.li1"]}</li>
									<li>{content["faq.section7.a5.li2"]}</li>
									<li>{content["faq.section7.a5.li3"]}</li>
									<li>{content["faq.section7.a5.li4"]}</li>
								</ul>
								<p>{content["faq.section7.a5.p3"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section7.a5.link1.href"]}
									title={content["faq.section7.a5.link1.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
			],
		},
	],
};
