import { content } from "~/content";
import { VideoDetail } from "~/components/primitives/video-detail/video-detail";

const videoElements = [
	{
		videoTitle: content["faq.section1.a1.video1.title"],
		videoLink: content["faq.section1.a1.video1.link"],
	},
];

export function FaqVideoDetail() {
	return <VideoDetail mainRoute="faq" videoElements={videoElements} />;
}

export default FaqVideoDetail;
