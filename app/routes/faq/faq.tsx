// import { DownloadItem } from "../../components/accordion-content-elements/download-item";
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
							{content["faq.section1.a1"]}
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<DownloadItem
									href={content["faq.section1.a1.link1.href"]}
									subtitle="PDF"
									title={content["faq.section1.a1.link1.title"]}
									hasBorder={false}
								/>
								{/* <VideoItem
									title={content["faq.section1.a1.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section1.a1.video1.linkName"])}`}
									hasBorder={false}
								/> */}
							</div>
						</div>
					),
				},
				{
					question: content["faq.section1.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section1.a2.p1"]}</p>
								<p className="mb-3">{content["faq.section1.a2.p2"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section1.a2.li1"]}</li>
									<li>{content["faq.section1.a2.li2"]}</li>
									<li>{content["faq.section1.a2.li3"]}</li>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section1.a2.li4"],
										}}
									/>
								</ul>
							</div>
							{/* <div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<DownloadItem
									href={content["faq.section1.a2.link.href"]}
									subtitle="PDF"
									title={content["faq.section1.a2.link.title"]}
									hasBorder={false}
								/>
							</div> */}
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
								</ul>
							</div>
							<div>
								<p
									className="lg:px-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section1.a3.p2"],
									}}
								/>
								<AnchorLink
									href={`#${createSlug(content["faq.section1.a3.link.title"])}`}
									title={content["faq.section1.a3.link.title"]}
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
							<p className="mb-3">{content["faq.section1.a4"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section1.a4.li1"]}</li>
								<li>{content["faq.section1.a4.li2"]}</li>
								<li>{content["faq.section1.a4.li3"]}</li>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section1.q5"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section1.a5.p1"]}</p>
							<ul className="ml-6 text-base leading-6 font-normal list-decimal">
								<li>{content["faq.section1.a5.li1"]}</li>
								<li>{content["faq.section1.a5.li2"]}</li>
							</ul>

							<p
								className="mt-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section1.a5.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["faq.section1.q6"],
					answer: content["faq.section1.a6"],
				},
				{
					question: content["faq.section1.q7"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p className="mb-3">{content["faq.section1.a7"]}</p>

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
							</div>
						</div>
					),
				},
				{
					question: content["faq.section1.q8"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section1.a8.p1"],
									}}
								/>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section1.a8.li1"]}</li>
									<li>{content["faq.section1.a8.li2"]}</li>
									<li>{content["faq.section1.a8.li3"]}</li>
									<li>{content["faq.section1.a8.li4"]}</li>
								</ul>
							</div>
							<p
								className="mb-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section1.a8.p2"],
								}}
							/>
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
			],
		},
		{
			title: content["faq.section2.title"],
			questions: [
				{
					question: content["faq.section2.q1"],
					answer: content["faq.section2.a1"],
				},
				{
					question: content["faq.section2.q2"],
					answer: (
						<div>
							<p className="mb-3 font-semibold">
								{content["faq.section2.a2.h4"]}
							</p>
							<p
								dangerouslySetInnerHTML={{
									__html: content["faq.section2.a2.p1"],
								}}
							/>
						</div>
					),
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
						<div>
							<p className="mb-3">{content["faq.section2.a5.p1"]}</p>
							<p className="mb-3">{content["faq.section2.a5.p2"]}</p>
							<p className="mb-3">{content["faq.section2.a5.p3"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section2.a5.li1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section2.a5.li2"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section2.a5.li3"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section2.a5.li4"],
									}}
								/>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section2.q6"],
					answer: content["faq.section2.a6"],
				},
				{
					question: content["faq.section2.q7"],
					answer: content["faq.section2.a7"],
				},
				{
					question: content["faq.section2.q8"],
					answer: (
						<div className="flex flex-col gap-5">
							<div>
								<p className="mb-3">{content["faq.section2.a8.p1"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
									<li>{content["faq.section2.a8.li1"]}</li>
									<li>{content["faq.section2.a8.li2"]}</li>
									<li>{content["faq.section2.a8.li3"]}</li>
								</ul>
							</div>
							<p className="text-xs">{content["faq.section2.a8.p2"]}</p>
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
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section3.a1.li3"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section3.a1.li4"],
									}}
								/>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section3.q2"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a2.p1"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section3.a2.h4.p1"]}
							</h4>
							<p className="mb-3">{content["faq.section3.a2.p2"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section3.a2.h4.p2"]}
							</h4>
							<p className="mb-3">{content["faq.section3.a2.p3"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal mb-3">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section3.a2.li1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section3.a2.li2"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section3.a2.li3"],
									}}
								/>
							</ul>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section3.a2.h4.p3"]}
							</h4>
							<p className="mb-3">{content["faq.section3.a2.p4"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section3.a2.h4.p4"]}
							</h4>
							<p className="mb-3">{content["faq.section3.a2.p5"]}</p>
							<h4 className="text-base leading-6 font-semibold mb-2">
								{content["faq.section3.a2.h4.p5"]}
							</h4>
							<p
								className="mb-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section3.a2.p6"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["faq.section3.q3"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a3.p1"]}</p>
							<ul className="list-decimal ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section3.a3.li1"]}</li>
								<li>{content["faq.section3.a3.li2"]}</li>
								<li>{content["faq.section3.a3.li3"]}</li>
								<li>{content["faq.section3.a3.li4"]}</li>
							</ul>
							<p
								className="my-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section3.a3.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["faq.section3.q4"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section3.a4.l1"]}</p>
							<ul className="list-decimal ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section3.a4.l2"]}</li>
								<li>{content["faq.section3.a4.l3"]}</li>
								<li>{content["faq.section3.a4.l4"]}</li>
								<li>{content["faq.section3.a4.l5"]}</li>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section3.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section3.a5.p1"]}</p>
								<ul className="list-decimal ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section3.a5.li1"]}</li>
									<li>{content["faq.section3.a5.li2"]}</li>
									<li>{content["faq.section3.a5.li3"]}</li>
								</ul>
								<p className="my-3">{content["faq.section3.a5.p2"]}</p>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section3.a5.p3"],
									}}
								/>
							</div>
							<div>
								<p className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.section3.a5.p4"]}
								</p>
								<AnchorLink
									href={`#${createSlug(content["faq.section3.a5.link.href"])}`}
									title={content["faq.section3.a5.link.title"]}
									hasBorder={false}
								/>
							</div>
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
								<p className="mb-3">{content["faq.section4.a1.p1"]}</p>
								<p className="mb-3">{content["faq.section4.a1.p2"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section4.a1.link.href"]}
									title={content["faq.section4.a1.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section4.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p className="mb-3">{content["faq.section4.a2.p1"]}</p>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={`#${createSlug(content["faq.section4.a2.link.href"])}`}
									title={content["faq.section4.a2.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section4.q3"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a3.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section4.a3.li1"]}</li>
								<li>{content["faq.section4.a3.li2"]}</li>
								<li>{content["faq.section4.a3.li3"]}</li>
							</ul>
							<p
								className="mt-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section4.a3.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["faq.section4.q4"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a4.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section4.a4.li1"]}</li>
								<li>{content["faq.section4.a4.li2"]}</li>
								<li>{content["faq.section4.a4.li3"]}</li>
							</ul>
							<p className="mt-3">{content["faq.section4.a4.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section4.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section4.a5.p1"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section4.a5.li1"]}</li>
								</ul>
								<p className="mt-3">{content["faq.section4.a5.p2"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section4.a5.li2"]}</li>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section4.a5.link.href"]}
									title={content["faq.section4.a5.link.title"]}
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
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a6.li1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a6.li2"],
									}}
								/>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section4.q7"],
					answer: content["faq.section4.a7"],
				},
				{
					question: content["faq.section4.q8"],
					answer: content["faq.section4.a8"],
				},
				{
					question: content["faq.section4.q9"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section4.a9.p1"]}</p>
								<p className="mb-3">{content["faq.section4.a9.p2"]}</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section4.a9.li1"]}</li>
									<li>{content["faq.section4.a9.li2"]}</li>
									<li>{content["faq.section4.a9.li3"]}</li>
								</ul>
								<p
									className="mt-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section4.a9.p3"],
									}}
								/>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={`#${createSlug(content["faq.section4.a9.link.href"])}`}
									title={content["faq.section4.a9.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section4.q10"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section4.a10.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section4.a10.li1"]}</li>
								<li>{content["faq.section4.a10.li2"]}</li>
							</ul>
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
						<div className="flex flex-col gap-3">
							<div>
								<p className="mb-3">{content["faq.section5.a1.p1"]}</p>
								<p className="mb-3 font-semibold">
									{content["faq.section5.a1.p2"]}
								</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li> {content["faq.section5.a1.li1"]}</li>
									<li> {content["faq.section5.a1.li2"]}</li>
									<li> {content["faq.section5.a1.li3"]}</li>
								</ul>
							</div>
							<div>
								<p className="mb-3 font-semibold">
									{content["faq.section5.a1.p3"]}
								</p>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li> {content["faq.section5.a1.li4"]}</li>
								</ul>
							</div>
							<p
								className="mt-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section5.a1.p4"],
								}}
							/>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li> {content["faq.section5.a1.li5"]}</li>
								<li> {content["faq.section5.a1.li6"]}</li>
								<li> {content["faq.section5.a1.li7"]}</li>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section5.q2"],
					answer: (
						<div className="flex flex-col gap-3">
							<p className="mb-3">{content["faq.section5.a2.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a2.li1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a2.li2"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a2.li3"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a2.li4"],
									}}
								/>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section5.q3"],
					answer: content["faq.section5.a3"],
				},
				{
					question: content["faq.section5.q4"],
					answer: (
						<div className="flex flex-col">
							<p className="mb-3">{content["faq.section5.a4.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section5.a4.li1"]}</li>
							</ul>
							<p className="mt-3">{content["faq.section5.a4.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section5.q5"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section5.a5.p1"],
									}}
								/>
								<ul className="list-decimal ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section5.a5.li1"]}</li>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section5.a5.li2"],
										}}
									/>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<VideoItem
									title={content["faq.section5.a5.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section5.a5.video1.linkName"])}`}
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
					answer: content["faq.section6.a1"],
				},
				{
					question: content["faq.section6.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<p>{content["faq.section6.a2"]}</p>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<VideoItem
									title={content["faq.section6.a2.video1.title"]}
									href={`/tutorials/${createSlug(content["faq.section6.a2.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section6.q3"],
					answer: (
						<div className="flex flex-col gap-3">
							<p>{content["faq.section6.a3"]}</p>
							<ul className="list-decimal ml-6 text-base leading-6 font-normal">
								<li>{content["faq.section6.a3.li1"]}</li>
								<li>{content["faq.section6.a3.li2"]}</li>
								<li>{content["faq.section6.a3.li3"]}</li>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section6.q4"],
					answer: content["faq.section6.a4"],
				},
				{
					question: content["faq.section6.q5"],
					answer: content["faq.section6.a5"],
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

								<h4 className="text-base leading-6 font-semibold">
									{content["faq.section7.a1.p2.h4"]}
								</h4>
								<p className="mb-3">{content["faq.section7.a1.p2"]}</p>

								<h4 className="text-base leading-6 font-semibold">
									{content["faq.section7.a1.p3.h4"]}
								</h4>
								<p className="mb-3">{content["faq.section7.a1.p3"]}</p>

								<h4 className="text-base leading-6 font-semibold">
									{content["faq.section7.a1.p4.h4"]}
								</h4>
								<p className="mb-3">{content["faq.section7.a1.p4"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={`#${createSlug(content["faq.section7.a1.link.href"])}`}
									title={content["faq.section7.a1.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section7.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>{content["faq.section7.a2.p1"]}</p>
								<p>{content["faq.section7.a2.p2"]}</p>
								<p>{content["faq.section7.a2.p3"]}</p>
							</div>
							<div>
								<h4 className="text-base leading-6 font-semibold mb-3">
									{content["faq.section7.a2.h4"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["faq.section7.a2.li1"]}</li>
									<li>{content["faq.section7.a2.li2"]}</li>
									<li>{content["faq.section7.a2.li3"]}</li>
									<li>{content["faq.section7.a2.li4"]}</li>
									<li>{content["faq.section7.a2.li5"]}</li>
									<li>{content["faq.section7.a2.li6"]}</li>
								</ul>
							</div>
							<p>{content["faq.section7.a2.p4"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section7.q3"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								className="lg:px-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section7.a3.p1"],
								}}
							/>
							<p
								className="lg:px-3"
								dangerouslySetInnerHTML={{
									__html: content["faq.section7.a3.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["faq.section7.q4"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="lg:px-3">{content["faq.section7.a4.p1"]}</p>
								<p className="lg:px-3 mt-3">{content["faq.section7.a4.p2"]}</p>
							</div>
							<div>
								<p
									className="lg:px-3 mt-3"
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a4.p3"],
									}}
								/>
								<AnchorLink
									href={content["faq.section7.a4.link.href"]}
									rel="noopener noreferrer"
									title={content["faq.section7.a4.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["faq.section7.q5"],
					answer: content["faq.section7.a5.p1"],
				},
				{
					question: content["faq.section7.q6"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section7.a6.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a6.li1"],
									}}
								/>
								<li>{content["faq.section7.a6.li2"]}</li>
							</ul>
							<p className="mt-3">{content["faq.section7.a6.p2"]}</p>
						</div>
					),
				},
				{
					question: content["faq.section7.q7"],
					answer: (
						<div>
							<p className="mb-3">{content["faq.section7.a7.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a7.li1"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a7.li2"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a7.li3"],
									}}
								/>
								<li
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a7.li4"],
									}}
								/>
							</ul>
						</div>
					),
				},
				{
					question: content["faq.section7.q8"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p className="mb-3">{content["faq.section7.a8.p1"]}</p>
								<ul className="list-decimal ml-6 text-base leading-6 font-normal">
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section7.a8.li1"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section7.a8.li2"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["faq.section7.a8.li3"],
										}}
									/>
								</ul>
							</div>

							<div>
								<h4
									className="lg:px-3 text-base leading-6"
									dangerouslySetInnerHTML={{
										__html: content["faq.section7.a8.p2"],
									}}
								/>
								<AnchorLink
									href={content["faq.section7.a8.link.href"]}
									rel="noopener noreferrer"
									title={content["faq.section7.a8.link.title"]}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: content["faq.section8.title"],
			questions: [
				{
					question: content["faq.section8.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<span>
								{content["faq.section8.a1.p1"]}
								<a
									href={`mailto:${content["faq.section8.a1.email"]}`}
									rel="noopener noreferrer"
									title={content["faq.section8.a1.email"]}
									className="underline decoration-1 underline-offset-4 focus-outline-default"
								>
									{content["faq.section8.a1.email"]}
								</a>
							</span>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["faq.section8.a1.link1.href"]}
									rel="noopener noreferrer"
									title={content["faq.section8.a1.link1.title"]}
								/>
								<DownloadItem
									title={content["faq.section8.a1.link2.title"]}
									href={content["faq.section8.a1.link2.href"]}
									subtitle="PDF"
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
