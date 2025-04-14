export const content = {
	/* -------------------- Hero -------------------- */
	"hero.title": "BärGPT",
	"hero.description":
		"Hier findet man Erklärungen, Tutorials und Videos zu BärGPT.",

	/* -------------------- Anchor links -------------------- */
	"anchor.download.label": "Download",
	"anchor.download.alt": "PDF Herunterladen",
	"anchor.toVideo.label": "zum Video",
	"anchor.toVideo.alt": "zum Video-Tutorial",

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
	"footer.arrowIconAltText": "Icon Link Pfeil",
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
	/* -------------------- FAQ PAGE -------------------- */
	"faq.title": "Fragen und Antworten",
	"faq.accordion.chevronDownAltText": "Antwort zeigen",
	"faq.accordion.chevronUpAltText": "Antwort verstecken",
	/* -------------------- FAQ PAGE -------------------- */
} as const;
