import type { Route } from "./+types/index";
import { Hero } from "~/components/hero/hero";
import { Feedback } from "~/components/feedback/feedback";
import { TopFaq } from "~/components/top-faq/top-faq";

export function meta(_: Route.MetaArgs) {
	return [{ title: "BärGPT Hilfe" }];
}

export default function Index() {
	return (
		<div className="">
			<Hero />
			<TopFaq />
			<Feedback />
		</div>
	);
}
