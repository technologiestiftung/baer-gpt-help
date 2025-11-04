import { VideoItem } from "~/components/accordion-content-elements/video-item";
import { content } from "../../content/index";
import { DownloadItem } from "~/components/accordion-content-elements/download-item";
import { createSlug } from "~/utils/create-slug";

export const prompts = {
	sections: [
		{
			title: content["prompts.section1.title"],
			questions: [
				{
					question: content["prompts.section1.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>{content["prompts.section1.a1"]}</p>
							</div>
							<div>
								<VideoItem
									title={content["prompts.section1.a1.video1.title"]}
									href={`/tutorials/${createSlug(content["prompts.section1.a1.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["prompts.section1.q2"],
					answer: (
						<>
							<p>{content["prompts.section1.a2.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["prompts.section1.a2.li1"]}</li>
								<li>{content["prompts.section1.a2.li2"]}</li>
								<li>{content["prompts.section1.a2.li3"]}</li>
							</ul>
							<p className="mt-3">{content["prompts.section1.a2.p2"]}</p>
						</>
					),
				},
			],
		},
		{
			title: content["prompts.section2.title"],
			questions: [
				{
					question: content["prompts.section2.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<div className="flex flex-col gap-3">
									<p>{content["prompts.section2.a1.p1"]}</p>
									<p>{content["prompts.section2.a1.p2"]}</p>
								</div>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["prompts.section2.a1.li1"]}</li>
									<li>{content["prompts.section2.a1.li2"]}</li>
									<li>{content["prompts.section2.a1.li3"]}</li>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["prompts.section2.a1.h4"]}
								</h4>
								<DownloadItem
									title={content["prompts.section2.a1.link.title"]}
									subtitle="PDF" //TODO add file size
									href={content["prompts.section2.a1.link.href"]}
								/>
								<VideoItem
									title={content["prompts.section2.a1.video1.title"]}
									href={`/tutorials/${createSlug(content["prompts.section2.a1.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["prompts.section2.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<ol className="list-decimal ml-6 marker:font-semibold">
									<li className="list-item">
										<h4 className="text-base leading-6 font-semibold">
											{content["prompts.section2.a2.subsection1.title"]}
										</h4>
										<p>{content["prompts.section2.a2.subsection1.text"]}</p>
										<ul className="list-disc ml-6 text-base leading-6 font-normal">
											<li>{content["prompts.section2.a2.subsection1.li1"]}</li>
											<li>{content["prompts.section2.a2.subsection1.li2"]}</li>
											<li>{content["prompts.section2.a2.subsection1.li3"]}</li>
										</ul>
									</li>
									<li className="mt-3 list-item">
										<h4 className="text-base leading-6 font-semibold">
											{content["prompts.section2.a2.subsection2.title"]}
										</h4>
										<p>{content["prompts.section2.a2.subsection2.text"]}</p>
										<ul className="list-disc ml-6 text-base leading-6 font-normal">
											<li>{content["prompts.section2.a2.subsection2.li1"]}</li>
											<li>{content["prompts.section2.a2.subsection2.li2"]}</li>
											<li>{content["prompts.section2.a2.subsection2.li3"]}</li>
										</ul>
									</li>
									<li className="mt-3 list-item">
										<h4 className="text-base leading-6 font-semibold">
											{content["prompts.section2.a2.subsection3.title"]}
										</h4>
										<p>{content["prompts.section2.a2.subsection3.text"]}</p>
										<ul className="list-disc ml-6 text-base leading-6 font-normal">
											<li>{content["prompts.section2.a2.subsection3.li1"]}</li>
											<li>{content["prompts.section2.a2.subsection3.li2"]}</li>
										</ul>
									</li>
									<li className="mt-3 list-item">
										<h4 className="text-base leading-6 font-semibold">
											{content["prompts.section2.a2.subsection4.title"]}
										</h4>
										<p>{content["prompts.section2.a2.subsection4.text"]}</p>
										<ul className="list-disc ml-6 text-base leading-6 font-normal">
											<li>{content["prompts.section2.a2.subsection4.li1"]}</li>
											<li>{content["prompts.section2.a2.subsection4.li2"]}</li>
											<li>{content["prompts.section2.a2.subsection4.li3"]}</li>
										</ul>
									</li>
								</ol>
								<p className="mt-3">{content["prompts.section2.a2.tip"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["prompts.section2.a2.h4"]}
								</h4>
								<DownloadItem
									title={content["prompts.section2.a2.link.title"]}
									subtitle="PDF" //TODO add file size
									href={content["prompts.section2.a2.link.href"]}
								/>
								<VideoItem
									title={content["prompts.section2.a2.video1.title"]}
									href={`/tutorials/${createSlug(content["prompts.section2.a2.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
			],
		},
		{
			title: content["prompts.section3.title"],
			questions: [
				{
					question: content["prompts.section3.q1"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a1.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a1.p2"],
								}}
							/>
							<VideoItem
								title={content["prompts.section3.a1.video1.title"]}
								href={`/tutorials/${createSlug(content["prompts.section3.a1.video1.linkName"])}`}
								hasBorder={false}
							/>
						</div>
					),
				},
				{
					question: content["prompts.section3.q2"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a2.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a2.p2"],
								}}
							/>
							<VideoItem
								title={content["prompts.section3.a2.video1.title"]}
								href={`/tutorials/${createSlug(content["prompts.section3.a2.video1.linkName"])}`}
								hasBorder={false}
							/>
						</div>
					),
				},
				{
					question: content["prompts.section3.q3"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a3.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a3.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["prompts.section3.q4"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a4.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a4.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["prompts.section3.q5"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a5.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["prompts.section3.a5.p2"],
								}}
							/>
							<VideoItem
								title={content["prompts.section3.a5.video1.title"]}
								href={`/tutorials/${createSlug(content["prompts.section3.a5.video1.linkName"])}`}
								hasBorder={false}
							/>
						</div>
					),
				},
			],
		},
	],
};
