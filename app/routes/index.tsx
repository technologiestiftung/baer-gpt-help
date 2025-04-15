import type { Route } from "./+types/index";
import { Hero } from "~/components/hero/hero";
import { Feedback } from "~/components/feedback/feedback";
import { PrimaryAnchorLink } from "~/components/primitives/anchor-links/primary-anchor-link";
import { content } from "~/content";

export function meta(_: Route.MetaArgs) {
	return [{ title: "BärGPT Hilfe" }];
}

export default function Index() {
	return (
		<>
			<Hero />
			<div className="p-20 flex flex-col items-center justify-center gap-8">
				<h2 className="text-4xl leading-10 font-semibold text-center text-dunkelblau-200">
					{content["faq.title"]}
				</h2>
				<PrimaryAnchorLink href="/faq">
					{content["faq.button"]}
					<img src="/icons/arrow-right-icon-light.svg" />
				</PrimaryAnchorLink>
			</div>

			<Feedback />
		</>
	);
}
