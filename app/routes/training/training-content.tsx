import { VideoItem } from "~/components/accordion-content-elements/video-item";
import { content } from "../../content/index";
import { DownloadItem } from "~/components/accordion-content-elements/download-item";

export const accordionContent = {
	sections: [
		{
			title: content["training.tasks.title"],
			tasks: [
				{
					task: content["training.section1.task1"],
					description: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task1.description.p1.heading"]}
								</h4>
								<p>{content["training.section1.task1.description.p1"]}</p>
							</div>
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task1.description.p2.heading"]}
								</h4>
								<p>
									{content["training.section1.task1.description.p2.1"]}
									<span>
										<a
											className="underline underline-offset-2"
											href={
												content[
													"training.section1.task1.description.p2.link.href"
												]
											}
											target="_blank"
											rel="noopener noreferrer"
										>
											{
												content[
													"training.section1.task1.description.p2.link.label"
												]
											}
										</a>
									</span>
									{content["training.section1.task1.description.p2.2"]}
								</p>
							</div>
							<div>
								{content["training.section1.task1.description.p3.heading"]}
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>
										{content["training.section1.task1.description.p3.li1"]}
									</li>
									<li>
										{content["training.section1.task1.description.p3.li2"]}
									</li>
									<li>
										{content["training.section1.task1.description.p3.li3"]}
									</li>
								</ul>
							</div>

							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["training.section1.task1.description.p4.heading"]}
								</h4>
								<VideoItem
									title={
										content["training.section1.task1.description.p4.link.label"]
									}
									href={
										content["training.section1.task1.description.p4.link.href"]
									}
									hasBorder={true}
									subtitle={content["training.videoSection.subtitle"]}
								/>
							</div>
						</div>
					),
				},
				{
					task: content["training.section1.task2"],
					description: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task2.description.p1.heading"]}
								</h4>
								<p>{content["training.section1.task2.description.p1"]}</p>
							</div>
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task2.description.p2.heading"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>
										{content["training.section1.task2.description.p2.li1"]}
									</li>
									<li>
										{content["training.section1.task2.description.p2.li2"]}
									</li>
									<li>
										{content["training.section1.task2.description.p2.li3"]}
									</li>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["training.section1.task2.description.p3.heading"]}
								</h4>
								<VideoItem
									title={
										content["training.section1.task2.description.p3.link.label"]
									}
									href={
										content["training.section1.task2.description.p3.link.href"]
									}
									hasBorder={true}
									subtitle={content["training.videoSection.subtitle"]}
								/>
							</div>
						</div>
					),
				},
				{
					task: content["training.section1.task3"],
					description: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task3.description.p1.heading"]}
								</h4>
								<p>{content["training.section1.task3.description.p1"]}</p>
							</div>
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task3.description.p2.heading"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>
										{content["training.section1.task3.description.p2.li1"]}
									</li>
									<li>
										{content["training.section1.task3.description.p2.li2"]}
									</li>
									<li>
										{content["training.section1.task3.description.p2.li3"]}
									</li>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["training.section1.task3.description.p3.heading"]}
								</h4>
								<DownloadItem
									href={`${content["training.section1.task3.description.p3.link.href"]}`}
									title={
										content["training.section1.task3.description.p3.link.label"]
									}
									subtitle={
										content["training.section1.task3.description.p3.subtitle"]
									}
								/>
								<VideoItem
									title={
										content["training.section1.task3.description.p4.link.label"]
									}
									href={
										content["training.section1.task3.description.p4.link.href"]
									}
									hasBorder={true}
									subtitle={content["training.videoSection.subtitle"]}
								/>
							</div>
						</div>
					),
				},
				{
					task: content["training.section1.task4"],
					description: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task4.description.p1.heading"]}
								</h4>
								<p>{content["training.section1.task4.description.p1"]}</p>
							</div>
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task4.description.p2.heading"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>
										{content["training.section1.task4.description.p2.li1"]}
									</li>
									<li>
										{content["training.section1.task4.description.p2.li2"]}
									</li>
								</ul>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["training.section1.task4.description.p3.heading"]}
								</h4>
								<DownloadItem
									href={`${content["training.section1.task4.description.p3.link.href"]}`}
									title={
										content["training.section1.task4.description.p3.link.label"]
									}
									subtitle={
										content["training.section1.task4.description.p3.subtitle"]
									}
								/>
								<DownloadItem
									href={`${content["training.section1.task4.description.p4.link.href"]}`}
									title={
										content["training.section1.task4.description.p4.link.label"]
									}
									subtitle={
										content["training.section1.task4.description.p4.subtitle"]
									}
								/>
								<VideoItem
									title={
										content["training.section1.task4.description.p5.link.label"]
									}
									href={
										content["training.section1.task4.description.p5.link.href"]
									}
									hasBorder={true}
									subtitle={
										content["training.section1.task4.description.p5.subtitle"]
									}
								/>
							</div>
						</div>
					),
				},
				{
					task: content["training.section1.task5"],
					description: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task5.description.p1.heading"]}
								</h4>
								<p>{content["training.section1.task5.description.p1"]}</p>
							</div>
							<div>
								<h4 className="font-semibold">
									{content["training.section1.task5.description.p2.heading"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>
										{content["training.section1.task5.description.p2.li1"]}
									</li>
									<li>
										{content["training.section1.task5.description.p2.li2"]}
									</li>
									<li>
										{content["training.section1.task5.description.p2.li3"]}
									</li>
								</ul>
							</div>
							<div>
								<p
									dangerouslySetInnerHTML={{
										__html: content["training.section1.task5.description.p3.1"],
									}}
								/>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["training.section1.task5.description.p4.heading"]}
								</h4>
								<VideoItem
									title={
										content["training.section1.task5.description.p4.link.label"]
									}
									href={
										content["training.section1.task5.description.p4.link.href"]
									}
									hasBorder={true}
									subtitle={
										content["training.section1.task5.description.p4.subtitle"]
									}
								/>
							</div>
						</div>
					),
				},
			],
		},
	],
};
