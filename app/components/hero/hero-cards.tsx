import { content } from "../../content";
import { PrimaryAnchorLink } from "../primitives/anchor-links/primary-anchor-link";
import { Link } from "react-router";

export function HeroCards() {
	return (
		<div className="z-10 w-full my-[60px] md:mb-[80px] md:mt-[52px] lg:my-[100px] flex flex-col md:flex-row gap-5 md:gap-4 lg:gap-[46px] px-5 lg:max-w-[1411px]">
			{content.hero.cards.map(({ title, description, link }, index) => (
				<Link
					to={link}
					className="flex-1 min-w-0 bg-hellblau-100 hover:bg-hellblau-60 text-dunkelblau-200 p-3.5 lg:py-[22px] lg:px-[26px] rounded-[3px] min-h-[230px] md:h-[270px] lg:h-[305px] flex flex-col justify-between"
					key={index}
				>
					<div className="w-fit text-sm leading-5 lg:text-base lg:leading-6 font-semibold bg-white text-dunkelblau-200 rounded-full px-2">
						{content["hero.pill.videoTutorial"]}
					</div>
					<div className="flex flex-col gap-1 lg:gap-3">
						<h3 className="text-xl leading-7 lg:text-3xl lg:leading-9 font-semibold">
							{title}
						</h3>
						<p className="text-base leading-6 lg:text-xl lg:leading-7 font-normal">
							{description}
						</p>
					</div>
				</Link>
			))}
			<div className="flex-1 min-w-0 bg-hellblau-100 text-dunkelblau-200 p-3.5 lg:py-[22px] lg:px-[26px] rounded-[3px] min-h-[230px] md:h-[270px] lg:h-[305px] flex flex-col justify-end">
				<div className="flex flex-col gap-1 lg:gap-3">
					<h3 className="text-xl leading-7 lg:text-3xl lg:leading-9 font-semibold">
						{content["hero.card.allTutorials.title"]}
					</h3>
					<PrimaryAnchorLink href={content["hero.card.allTutorials.link"]}>
						{content["hero.card.allTutorials.button"]}
						<img src="/icons/arrow-right-icon-light.svg" />
					</PrimaryAnchorLink>
				</div>
			</div>
		</div>
	);
}
