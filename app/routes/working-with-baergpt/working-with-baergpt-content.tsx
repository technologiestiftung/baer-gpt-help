import { VideoItem } from "~/components/accordion-content-elements/video-item";
import { content } from "../../content/index";
import { DownloadItem } from "~/components/accordion-content-elements/download-item";
import { createSlug } from "~/utils/create-slug";
import { AnchorLink } from "../../components/accordion-content-elements/anhor-link";

export const accordionContent = {
	sections: [
		{
			title: content["workingWithBearGPT.section1.title"],
			questions: [
				{
					question: content["workingWithBearGPT.section1.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>{content["workingWithBearGPT.section1.a1.p1"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<VideoItem
									title={content["workingWithBearGPT.section1.a1.video.title"]}
									href={`/tutorials/${createSlug(content["workingWithBearGPT.section1.a1.video.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section1.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p>{content["workingWithBearGPT.section1.a2.p1"]}</p>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["workingWithBearGPT.section1.a2.p2"]}
								</h4>
								<AnchorLink
									href={`#${createSlug(content["workingWithBearGPT.section1.a2.link.title"])}`}
									title={content["workingWithBearGPT.section1.a2.link.title"]}
								/>
								<VideoItem
									title={content["workingWithBearGPT.section1.a2.video1.title"]}
									href={`/tutorials/${createSlug(content["workingWithBearGPT.section1.a2.video1.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section1.q3"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["workingWithBearGPT.section1.a3.p1"],
									}}
								/>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li1"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li2"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li3"],
										}}
									/>
								</ul>
							</div>
							<div>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["workingWithBearGPT.section1.a3.p3"],
									}}
								/>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li4"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li5"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li6"],
										}}
									/>
								</ul>
							</div>
							<div>
								<p
									className="mb-3"
									dangerouslySetInnerHTML={{
										__html: content["workingWithBearGPT.section1.a3.p4"],
									}}
								/>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li7"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li8"],
										}}
									/>
									<li
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section1.a3.li9"],
										}}
									/>
								</ul>
							</div>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section1.q4"],
					answer: (
						<div className="flex flex-col gap-3">
							<ul className="list-decimal ml-6 text-base leading-6 font-normal">
								<li>{content["workingWithBearGPT.section1.a4.li1"]}</li>
								<li>{content["workingWithBearGPT.section1.a4.li2"]}</li>
								<li>
									{content["workingWithBearGPT.section1.a4.li3"]}
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section1.a4.li3.p1"]}</li>
										<li>{content["workingWithBearGPT.section1.a4.li3.p2"]}</li>
										<li>{content["workingWithBearGPT.section1.a4.li3.p3"]}</li>
									</ul>
								</li>
							</ul>
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section1.a4.p2"],
								}}
							/>
						</div>
					),
				},
			],
		},
		{
			title: content["workingWithBearGPT.section2.title"],
			questions: [
				{
					question: content["workingWithBearGPT.section2.q1"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div className="flex flex-col gap-5">
								<div>
									<p> {content["workingWithBearGPT.section2.a1.p1"]}</p>
									<p> {content["workingWithBearGPT.section2.a1.p2"]}</p>
								</div>
								<div>
									<h4 className="font-semibold">
										{content["workingWithBearGPT.section2.a1.h4.p1"]}
									</h4>
									<p> {content["workingWithBearGPT.section2.a1.p3"]}</p>
									<p> {content["workingWithBearGPT.section2.a1.p4"]}</p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a1.li1"]}</li>
										<li>{content["workingWithBearGPT.section2.a1.li2"]}</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold">
										{content["workingWithBearGPT.section2.a1.h4.p2"]}
									</h4>
									<p> {content["workingWithBearGPT.section2.a1.p5"]}</p>
									<p> {content["workingWithBearGPT.section2.a1.p6"]}</p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a1.li3"]}</li>
										<li>{content["workingWithBearGPT.section2.a1.li4"]}</li>
										<li>{content["workingWithBearGPT.section2.a1.li5"]}</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold">
										{content["workingWithBearGPT.section2.a1.h4.p3"]}
									</h4>
									<p
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section2.a1.p7"],
										}}
									/>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a1.li6"]}</li>
										<li>{content["workingWithBearGPT.section2.a1.li7"]}</li>
									</ul>
								</div>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<DownloadItem
									title={content["workingWithBearGPT.section2.a1.link.title"]}
									href={content["workingWithBearGPT.section2.a1.link.href"]}
									subtitle="PDF"
								/>
								<VideoItem
									title={content["workingWithBearGPT.section2.a1.video.title"]}
									href={`/tutorials/${createSlug(content["workingWithBearGPT.section2.a1.video.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section2.q2"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div className="flex flex-col gap-5">
								<div>
									<h4 className="font-semibold">
										{content["workingWithBearGPT.section2.a2.h4.p1"]}
									</h4>
									<p> {content["workingWithBearGPT.section2.a2.p1"]}</p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a2.li1"]}</li>
										<li>{content["workingWithBearGPT.section2.a2.li2"]}</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold">
										{content["workingWithBearGPT.section2.a2.h4.p2"]}
									</h4>
									<p> {content["workingWithBearGPT.section2.a2.p2"]}</p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a2.li3"]}</li>
										<li>{content["workingWithBearGPT.section2.a2.li4"]}</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold">
										{content["workingWithBearGPT.section2.a2.h4.p3"]}
									</h4>
									<p> {content["workingWithBearGPT.section2.a2.p3"]}</p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a2.li5"]}</li>
										<li>{content["workingWithBearGPT.section2.a2.li6"]}</li>
									</ul>
								</div>
								<div>
									<p
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section2.a2.p4"],
										}}
									/>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a2.li7"]}</li>
									</ul>
								</div>
							</div>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section2.q3"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div className="flex flex-col gap-5">
								<div>
									<p> {content["workingWithBearGPT.section2.a3.p1"]}</p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a3.li1"]}</li>
									</ul>
								</div>
								<div>
									<p> {content["workingWithBearGPT.section2.a3.p2"]}</p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a3.li2"]}</li>
										<li>{content["workingWithBearGPT.section2.a3.li3"]}</li>
									</ul>
								</div>
								<div>
									<p
										dangerouslySetInnerHTML={{
											__html: content["workingWithBearGPT.section2.a3.p3"],
										}}
									/>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a3.li4"]}</li>
									</ul>
								</div>
								<div>
									<h4 className="font-semibold">
										{content["workingWithBearGPT.section2.a3.h4"]}
									</h4>
									<p> {content["workingWithBearGPT.section2.a3.p4"]}</p>
									<ul className="list-decimal ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a3.li5"]}</li>
										<li>{content["workingWithBearGPT.section2.a3.li6"]}</li>
									</ul>
								</div>
							</div>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section2.q4"],
					answer: (
						<div className="flex flex-col gap-3">
							<p> {content["workingWithBearGPT.section2.a4.p1"]}</p>
							<ul className="list-disc ml-6 text-base leading-6 font-normal">
								<li>{content["workingWithBearGPT.section2.a4.li1"]}</li>
								<li>{content["workingWithBearGPT.section2.a4.li2"]}</li>
								<li>{content["workingWithBearGPT.section2.a4.li3"]}</li>
							</ul>
							<p> {content["workingWithBearGPT.section2.a4.p2"]}</p>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section2.q5"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section2.a5.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section2.a5.p2"],
								}}
							/>
							<div>
								<h4 className="font-semibold">
									{content["workingWithBearGPT.section2.a5.h4.p1"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["workingWithBearGPT.section2.a5.li1"]}</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold">
									{content["workingWithBearGPT.section2.a5.h4.p2"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["workingWithBearGPT.section2.a5.li2"]}</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold">
									{content["workingWithBearGPT.section2.a5.h4.p3"]}
								</h4>
								<ul className="list-disc ml-6 text-base leading-6 font-normal">
									<li>{content["workingWithBearGPT.section2.a5.li3"]}</li>
								</ul>
							</div>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section2.q6"],
					answer: (
						<div className="flex flex-col gap-3">
							<p>{content["workingWithBearGPT.section2.a6.p1"]} </p>
							<p>{content["workingWithBearGPT.section2.a6.p2"]} </p>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section2.q7"],
					answer: (
						<div className="flex flex-col gap-5 lg:gap-9">
							<div className="flex flex-col gap-5">
								<p>{content["workingWithBearGPT.section2.a7.p1"]} </p>
								<h4 className="font-semibold">
									{content["workingWithBearGPT.section2.a7.h4"]}{" "}
								</h4>
								<div className="pl-3">
									<p>{content["workingWithBearGPT.section2.a7.p2"]} </p>
									<ul className="list-disc ml-6 text-base leading-6 font-normal">
										<li>{content["workingWithBearGPT.section2.a7.li1"]}</li>
										<li>{content["workingWithBearGPT.section2.a7.li2"]}</li>
										<li>{content["workingWithBearGPT.section2.a7.li3"]}</li>
										<li>{content["workingWithBearGPT.section2.a7.li4"]}</li>
									</ul>
								</div>
							</div>
							<div>
								<h4 className="lg:px-3 text-base leading-6 font-semibold">
									{content["faq.furtherLinksVideos.title"]}
								</h4>
								<AnchorLink
									href={content["workingWithBearGPT.section2.a7.link.href"]}
									title={content["workingWithBearGPT.section2.a7.link.title"]}
								/>
								<VideoItem
									title={content["workingWithBearGPT.section2.a7.video.title"]}
									href={`/tutorials/${createSlug(content["workingWithBearGPT.section2.a7.video.linkName"])}`}
									hasBorder={false}
								/>
							</div>
						</div>
					),
				},
				// // Question 7
				// "workingWithBearGPT.section2.q7":
				// 	"Profi-Tipp: Arbeiten Sie mit einem Masterprompt",
				// "workingWithBearGPT.section2.a7.p1":
				// 	"Ein Masterprompt ist eine Grundanweisung, mit der Sie BärGPT bitten, Ihnen beim Formulieren besserer Prompts zu helfen. Er funktioniert wie ein persönlicher Coach für Ihre Eingaben. Sie beginnen mit einer ersten Formulierung, die KI gibt Ihnen Feedback und macht Verbesserungsvorschläge, und Sie verfeinern Ihre Eingabe iterativ weiter.",
				// "workingWithBearGPT.section2.a7.p2":
				// 	"Setzen Sie diesen Masterprompt zu Beginn eines neuen Chats ein, damit er Sie dabei unterstützt, Ihre Fragen strukturiert zu stellen:",
				// "workingWithBearGPT.section2.a7.p3": `"Ich möchte, dass du mein Prompt Creator wirst. Dein Ziel ist es, mir zu helfen, den bestmöglichen Prompt für meine Bedürfnisse zu erstellen. Der Prompt wird von dir verwendet. Du wirst den folgenden Prozess befolgen:"`,
				// "workingWithBearGPT.section2.a7.li1": `"Als erstes fragst du mich, worum es in dem Prompt gehen soll. Ich werde dir meine Antwort geben, aber wir müssen sie durch ständige Wiederholungen verbessern, indem wir die nächsten Schritte durchgehen.",`,
				// "workingWithBearGPT.section2.a7.li2": `"Auf der Grundlage meines Inputs erstellst du 3 Abschnitte: a) Überarbeiteter Prompt (du schreibst deinen überarbeiteten Prompt. Er sollte klar, präzise und für dich leicht verständlich sein.) b) Vorschläge (du machst Vorschläge, welche Details du in den Prompt einbauen solltest, um ihn zu verbessern) c) Fragen (du stellst relevante Fragen dazu, welche zusätzlichen Informationen ich brauche, um den Prompt zu verbessern).",`,
				// "workingWithBearGPT.section2.a7.li3": `"Der Prompt, den du bereitstellst, sollte die Form einer Anfrage von mir haben, die von dir ausgeführt werden soll.",`,
				// "workingWithBearGPT.section2.a7.li4": `"Wir werden diesen iterativen Prozess fortsetzen, indem ich dir zusätzliche Informationen liefere und du die Aufforderung im Abschnitt "Überarbeitete Aufforderung" aktualisierst, bis sie vollständig ist."`,
				// "workingWithBearGPT.section2.a7.link.title":
				// 	"Leitfaden für effektives Prompting",
				// "workingWithBearGPT.section2.a7.link.href":
				// 	"https://www.berlin.de/politik-und-verwaltung/rundschreiben/download.php/4329264",
				// "workingWithBearGPT.section2.a7.video.title":
				// 	"Starke Anfragen formulieren mit BärGPT",
				// "workingWithBearGPT.section2.a7.video.linkName":
				// 	"Starke Anfragen formulieren mit BärGPT",
			],
		},
		{
			title: content["workingWithBearGPT.section3.title"],
			questions: [
				{
					question: content["workingWithBearGPT.section3.q1"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a1.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a1.p2"],
								}}
							/>
							<VideoItem
								title={content["workingWithBearGPT.section3.a1.video1.title"]}
								href={`/tutorials/${createSlug(content["workingWithBearGPT.section3.a1.video1.linkName"])}`}
								hasBorder={false}
							/>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section3.q2"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a2.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a2.p2"],
								}}
							/>
							<VideoItem
								title={content["workingWithBearGPT.section3.a2.video1.title"]}
								href={`/tutorials/${createSlug(content["workingWithBearGPT.section3.a2.video1.linkName"])}`}
								hasBorder={false}
							/>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section3.q3"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a3.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a3.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section3.q4"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a4.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a4.p2"],
								}}
							/>
						</div>
					),
				},
				{
					question: content["workingWithBearGPT.section3.q5"],
					answer: (
						<div className="flex flex-col gap-3">
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a5.p1"],
								}}
							/>
							<p
								dangerouslySetInnerHTML={{
									__html: content["workingWithBearGPT.section3.a5.p2"],
								}}
							/>
							<VideoItem
								title={content["workingWithBearGPT.section3.a5.video1.title"]}
								href={`/tutorials/${createSlug(content["workingWithBearGPT.section3.a5.video1.linkName"])}`}
								hasBorder={false}
							/>
						</div>
					),
				},
			],
		},
	],
};
