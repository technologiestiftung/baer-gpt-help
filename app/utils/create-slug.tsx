export function createSlug(title: string): string {
	return title
		.toLowerCase()
		.replace(/ä/g, "ae")
		.replace(/ö/g, "oe")
		.replace(/ü/g, "ue")
		.replace(/ß/g, "ss")
		.normalize("NFD") // Handle accents
		.replace(/[\u0300-\u036f]/g, "") // Remove accents
		.replace(/[^\w\s-]/g, "") // Remove punctuation
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/--+/g, "-") // Avoid double dashes
		.trim();
}
