import { content } from "../../content";

export default function Index() {
	return (
		<div className="text-dunkelblau-200">
			<div className="bg-dunkelblau-100 w-full relative lg:min-h-[500px]">
				<div className="flex flex-col gap-10 lg:gap-[60px] md:max-w-[600px] lg:max-w-[934px] mx-auto py-10 px-5 md:px-0 md:py-[60px] lg:py-20">
					<div className="rounded-xs z-10 p-3 md:p-4.5 lg:p-[22px] relative bg-hellblau-100 w-[270px] md:w-fit text-base leading-6 md:text-lg md:leading-7 lg:text-2xl lg:leading-8 font-normal self-start">
						{content["about.chat.p1"]}
						<img
							src="/icons/speech-bubble-triangle-blue.svg"
							className="absolute -top-6 left-0 -z-10"
							alt="speech bubble"
						/>
					</div>
					<div className="rounded-xs z-10 p-3 md:p-4.5 lg:p-[22px] relative bg-hellblau-30 w-[270px] md:w-fit text-base leading-6 md:text-lg md:leading-7 lg:text-2xl lg:leading-8 font-normal self-end md:ml-[122px] lg:ml-[111px]">
						{content["about.chat.p2"]}
						<img
							src="/icons/speech-bubble-triangle-white.svg"
							className="absolute -top-6 -right-[1px] -z-10"
							alt="speech bubble"
						/>
					</div>
				</div>
				<img
					src="/icons/berlin-baer-large-icon.svg"
					className="absolute bottom-0 right-0 overflow-hidden z-0 hidden lg:flex w-[412px]"
					alt="icon berlin baer"
				/>
			</div>
			<div className="flex flex-col px-5 lg:px-[50px] lg:py-20 md:py-[60px] py-10 gap-[60px] lg:gap-20">
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
