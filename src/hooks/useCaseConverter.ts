// src/hooks/useCaseConverter.ts
import { useState } from "react";
import {
    toSentenceCase,
    toLowerCase,
    toUpperCase,
    toCapitalizeCase,
    toTitleCase,
} from "@/utils/caseConverter";

export type CaseType = "sentence" | "lower" | "upper" | "capitalize" | "title" | null;

export const useCaseConverter = () => {
    const [text, setText] = useState("");
    const [activeCase, setActiveCase] = useState<CaseType>(null);

    const handleSentenceCase = () => {
        setText(toSentenceCase(text));
        setActiveCase("sentence");
    };
    const handleLowerCase = () => {
        setText(toLowerCase(text));
        setActiveCase("lower");
    };
    const handleUpperCase = () => {
        setText(toUpperCase(text));
        setActiveCase("upper");
    };
    const handleCapitalizeCase = () => {
        setText(toCapitalizeCase(text));
        setActiveCase("capitalize");
    };
    const handleTitleCase = () => {
        setText(toTitleCase(text));
        setActiveCase("title");
    };

    const handleClear = () => {
        setText("");
        setActiveCase(null);
    };

    return {
        text,
        setText,
        activeCase,
        handleSentenceCase,
        handleLowerCase,
        handleUpperCase,
        handleCapitalizeCase,
        handleTitleCase,
        handleClear,
    };
};
