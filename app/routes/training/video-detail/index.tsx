import { content } from "~/content";
import { VideoDetail } from "~/components/primitives/video-detail/video-detail";

const videoElements = content["training.sections"].flatMap((section) =>
	section.videos.map((video) => ({
		videoTitle: video.videoTitle,
		videoLink: video.videoLink,
	})),
);

export function TrainingVideoDetail() {
	return <VideoDetail mainRoute="training" videoElements={videoElements} />;
}

export default TrainingVideoDetail;
