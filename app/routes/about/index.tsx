import { content } from "../../content";
import { AboutHero } from "~/components/about-hero/about-hero";

export default function Index() {
	return (
		<div className="text-dunkelblau-200">
			<AboutHero />
			<div className="flex flex-col px-5 lg:px-[50px] lg:py-20 md:py-[60px] py-10 gap-[60px] lg:gap-20 max-w-[1412px] mx-auto">
				<p
					className="lg:text-3xl lg:leading-9 font-normal md:text-xl md:leading-7 text-lg lg:max-w-8/12"
					dangerouslySetInnerHTML={{ __html: content["about.p1.text"] }}
				/>

				<div>
					<h2 className="lg:text-3xl lg:leading-9 font-semibold md:text-xl md:leading-7 lg:mb-5 mb-3 text-lg">
						{content["about.p2.title"]}
					</h2>
					<p className="lg:text-3xl lg:leading-9 font-normal md:text-xl md:leading-7 text-lg lg:max-w-8/12">
						{content["about.p2.text"]}
					</p>
				</div>

				<div className="flex flex-col xl:flex-row justify-between">
					<h2 className="lg:text-3xl lg:leading-9 font-semibold md:text-xl md:leading-7 lg:mb-5 mb-3 text-lg lg:w-5/12">
						{content["about.p3.title"]}
					</h2>
					<div className="flex flex-col gap-3 xl:w-7/12">
						{content["about.bulletpoints"].map((bulletpoint, index) => (
							<div
								key={index}
								className="p-2 flex items-center h-[60px] w-full bg-hellblau-100 lg:text-2xl lg:leading-8 md:text-xl md:leading-7 font-normal text-base leading-6"
							>
								{bulletpoint}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
