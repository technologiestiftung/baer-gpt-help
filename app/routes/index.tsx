import type { Route } from "./+types/index";
import content from "~/content/index.md?raw";
import Markdown from "react-markdown";

export function meta(_: Route.MetaArgs) {
	return [{ title: "BärGPT Hilfe" }];
}

export default function Index() {
	return (
		<div className="bg-sky-300">
			<Markdown>{content}</Markdown>
		</div>
	);
}
