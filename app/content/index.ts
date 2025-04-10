export const content = {
	hero: {
		title: "BärGPT",
		description: "Hier findet man Erklärungen, Tutorials und Videos zu BärGPT.",
	},
	footer: {
		baerIconAltText: "Berlin Bär Logo",
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
} as const;
