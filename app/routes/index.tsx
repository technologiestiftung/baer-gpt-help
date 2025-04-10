import type { Route } from "./+types/index";
import { content } from "../content";

export function meta(_: Route.MetaArgs) {
	return [{ title: "BärGPT Hilfe" }];
}

export default function Index() {
	return (
		<div className="bg-sky-300">
			<h1>{content.hero.title}</h1>
			<p>{content.hero.description}</p>
		</div>
	);
}
