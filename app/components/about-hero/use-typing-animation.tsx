import { useEffect, useState } from "react";

const MIN_DELAY = 50;
const MAX_DELAY = 250;

export function useTypingAnimation(words: string[]) {
	const [displayedWords, setDisplayedWords] = useState<string[]>([]);
	const [wordIndex, setWordIndex] = useState(0);

	useEffect(() => {
		if (wordIndex >= words.length) {
			return () => {};
		}

		const randomDelay =
			Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;

		const timeout = setTimeout(() => {
			setDisplayedWords((prev) => [...prev, words[wordIndex]]);
			setWordIndex((prev) => prev + 1);
		}, randomDelay);

		return () => clearTimeout(timeout);
	}, [wordIndex, words]);

	return displayedWords.join(" ");
}
