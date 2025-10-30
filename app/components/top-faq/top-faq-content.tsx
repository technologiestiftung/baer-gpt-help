import { VideoItem } from "../accordion-content-elements/video-item";
import { content } from "../../content/index";
import { createSlug } from "~/utils/create-slug";

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
			question: content["faq.top5.q5"],
			answer: (
				<div className="flex flex-col gap-5 lg:gap-9">
					<div>
						<p className="mb-3">{content["faq.top5.a5.p1"]}</p>
					</div>
					<div>
						<h4 className="lg:px-3 text-base leading-6 font-semibold">
							{content["faq.furtherLinksVideos.title"]}
						</h4>
						<VideoItem
							title={content["faq.top5.a5.video1.title"]}
							href={`/tutorials/${createSlug(content["faq.top5.a5.video1.linkName"])}`}
							hasBorder={false}
						/>
					</div>
				</div>
			),
		},
	],
};
