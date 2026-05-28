import type { Config } from "@react-router/dev/config";

export default {
	async prerender() {
		return [
			"/",
			"/about/",
			"/faq/",
			"/arbeiten-mit-baergpt/",
			"/tutorials/",
			"/training/",
		];
	},
} satisfies Config;
