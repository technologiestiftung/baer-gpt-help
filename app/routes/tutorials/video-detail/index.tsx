import { content } from "~/content";
import { VideoDetail } from "~/components/primitives/video-detail/video-detail";

const tutorialVideoElements = content["tutorials.sections"].flatMap((section) =>
	section.videos.map((video) => ({
		videoTitle: video.videoTitle,
		videoLink: video.videoLink,
	})),
);

export function TutorialsVideoDetail() {
	return (
		<VideoDetail mainRoute="tutorials" videoElements={tutorialVideoElements} />
	);
}

export default TutorialsVideoDetail;
