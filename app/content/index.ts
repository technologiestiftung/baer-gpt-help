import { title } from "process";

export const content = {
	/* -------------------- Hero -------------------- */
	"hero.welcome": "Willkommen im BärGPT Hilfecenter",
	"hero.title":
		"Hilfe und Tipps zur Nutzung von BärGPT, dem KI-Assistenen für die Verwaltung",
	"hero.pill.videoTutorial": "Video Tutorial",
	"hero.video.title": "Erste Schritte mit BärGPT",
	"hero.video.link": "https://player.vimeo.com/video/1038180636?",
	hero: {
		cards: [
			{
				title: "Starke Anfragen formulieren mit BärGPT",
				description: "So erstellen Sie effektive Master-Prompts",
				link: "/tutorials", //add fitting link when available
			},
			{
				title: "Texte schreiben und bearbeiten mit KI",
				description: "BärGPT als kreatives Schreibwerkzeug nutzen.",
				link: "/tutorials", //add fitting link when available
			},
		],
	},
	"hero.card.allTutorials.title": "Noch mehr über BärGPT lernen?",
	"hero.card.allTutorials.button": "Alle Video-Tutorials",
	"hero.card.allTutorials.link": "/tutorials",

	/* -------------------- Header -------------------- */
	"header.logoAlt": "Zur Startseite",
	header: {
		nav: {
			internal: [
				{
					name: "Fragen & Antworten",
					url: "/faq",
					ariaLabel: "zu Fragen & Antworten Seite",
				},
				{
					name: "Video-Tutorials",
					url: "/tutorials",
					ariaLabel: "zu Video-Tutorials Seite",
				},
				{
					name: "Prompts",
					url: "/prompts",
					ariaLabel: "zu Prompts Seite",
				},
				{
					name: "Über BärGPT",
					url: "/about",
					ariaLabel: "zu Über BärGPT Seite",
				},
			],
			external: {
				name: "zu BärGPT",
				url: "https://baer-gpt-staging.vercel.app/",
				altText: "zur BärGPT Webseite",
			},
		},
	},

	/* -------------------- Footer -------------------- */
	"footer.baerIconAltText": "Logo Berlin Bär",
	footer: {
		navbar: [
			{
				name: "BärGPT",
				url: "https://baer-gpt-staging.vercel.app/",
			},
			{
				name: "Impressum",
				url: "https://www.technologiestiftung-berlin.de/impressum",
			},
			{
				name: "Datenschutz",
				url: "https://www.technologiestiftung-berlin.de/datenschutz",
			},
		],
		logoLinks: [
			{
				href: "https://citylab-berlin.org/de/start/",
				src: "https://logos.citylab-berlin.org/logo-citylab-color.svg",
				alt: "Logo CityLAB Berlin",
				width: "w-[174px]",
				text: "",
			},
			{
				href: "https://www.technologiestiftung-berlin.de/",
				src: "https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg",
				alt: "Logo Technologiestiftung Berlin",
				width: "w-[176px]",
				text: "Ein Projekt der",
			},
			{
				href: "https://www.berlin.de/rbmskzl/",
				src: "https://logos.citylab-berlin.org/logo-senatskanzlei-buergermeister-horizontal.svg",
				alt: "Logo Senatskanzlei",
				width: "w-[230px]",
				text: "Geförder durch",
			},
		],
	},

	/* -------------------- FAQ Hompage -------------------- */
	"faq.title": "Fragen und Antworten",
	"faq.button": "Alle Fragen anzeigen",

	/* -------------------- Feedback -------------------- */

	"feedback.title": "Hast du Feedback zu BärGPT?",
	"feedback.description":
		"Fülle die Umfrage aus und hilf uns, BärGPT noch besser zu machen.",
	"feedback.button": "Zur Umfrage",
	"feedback.link":
		"https://citylabberlin.typeform.com/to/kCdnCgvC?product_id=baergpt-hilfe",

	/* -------------------- Tutorials -------------------- */
	"tutorials.title": "Video-Tutorials",
	"tutorials.description":
		"Unsere kurzen Videoanleitungen helfen Ihnen, schnell und sicher mit BärGPT durchzustarten. Vom ersten Überblick über die Benutzeroberfläche bis hin zur Arbeit mit Dokumenten und der gezielten Nutzung von Anfragen – hier finden Sie praxisnahe Tipps für Ihren Arbeitsalltag in der Verwaltung.",
	"tutorials.video.title": "Erste Schritte mit BärGPT",
	"tutorials.pill.videoTutorial": "Video Tutorial",
	"tutorials.video.link": "https://player.vimeo.com/video/1038180636?",

	"tutorials.sectionDocuments": "Mit Dokumenten und Ordnern arbeiten",
	"tutorials.sectionPrompts":
		"Was sind Anfragen (Prompts) und wie nutze ich sie richtig?",
	tutorials: {
		sectionDocuments: [
			{
				title: "Dokumente hochladen leicht gemacht",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
			{
				title: "Dokument anzeigen, löschen und herunterladen",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
			{
				title: "Ordner erstellen und Dateien sortieren",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
			{
				title: "Fragen zu Ordnern und Dokumenten im Chat stellen",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
		],
		sectionPrompts: [
			{
				title: "Starke Anfragen formulieren mit BärGPT",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
			{
				title: "Dokumente präzise zusammenfassen",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
			{
				title: "Dokumente direkt im Chat übersetzen",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
			{
				title: "Texte schreiben und bearbeiten mit BärGPT",
				videoLink: "https://player.vimeo.com/video/1038180636?",
				link: "/tutorials",
			},
		],
	},
} as const;
