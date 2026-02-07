// TypeScript types for LangPal Conversation Starter

export interface Language {
    id: string;
    name: string;
    flag: string;
    greeting: string; // Example greeting in that language
}

export interface Scenario {
    id: string;
    title: string;
    description: string;
    emoji: string;
}

export interface Prompt {
    goal: string;
    hints: string[];
    expectedKeywords: string[];
    politenessPhrases: string[];
}

export interface Feedback {
    score: number; // 1-5 stars
    message: string;
    suggestions: string[];
    isPositive: boolean;
}

export interface AppState {
    selectedLanguage: Language | null;
    selectedScenario: Scenario | null;
    userResponse: string;
    feedback: Feedback | null;
    isLoading: boolean;
    error: string | null;
    hasSubmitted: boolean;
}
