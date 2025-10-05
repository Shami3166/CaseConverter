// src/utils/caseConverter.ts

// Sentence Case
export const toSentenceCase = (text: string): string => {
    if (!text) return "";
    return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
};

// Lower Case
export const toLowerCase = (text: string): string => text.toLowerCase();

// Upper Case
export const toUpperCase = (text: string): string => text.toUpperCase();

// Capitalize Case (First letter of each word)
export const toCapitalizeCase = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
};

// Title Case (all important words capitalized)
export const toTitleCase = (text: string): string => {
    if (!text) return "";
    const smallWords = ["a", "an", "and", "the", "in", "on", "with", "of", "at", "for"];
    return text
        .toLowerCase()
        .split(" ")
        .map((word, index) => {
            if (smallWords.includes(word) && index !== 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
};
