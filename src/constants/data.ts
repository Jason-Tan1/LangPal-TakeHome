import { Language, Scenario, Prompt } from '../types';

// ============================================
// LANGUAGES
// ============================================

export const LANGUAGES: Language[] = [
    {
        id: 'fr',
        name: 'French',
        flag: '🇫🇷',
        greeting: 'Bonjour!',
    },
    {
        id: 'es',
        name: 'Spanish',
        flag: '🇪🇸',
        greeting: '¡Hola!',
    },
    {
        id: 'de',
        name: 'German',
        flag: '🇩🇪',
        greeting: 'Guten Tag!',
    },
    {
        id: 'jp',
        name: 'Japanese',
        flag: '🇯🇵',
        greeting: 'こんにちは!',
    },
];

// ============================================
// SCENARIOS
// ============================================

export const SCENARIOS: Scenario[] = [
    {
        id: 'cafe',
        title: 'Ordering Coffee',
        description: 'Order a drink and a snack at a local café.',
    },
    {
        id: 'greeting',
        title: 'Meeting Someone',
        description: 'Introduce yourself to a stranger.',
    },
    {
        id: 'directions',
        title: 'Asking Directions',
        description: 'Ask someone how to get to the train station.',
    },
];

// ============================================
// PROMPTS - Organized by language and scenario
// ============================================

type PromptMap = {
    [languageId: string]: {
        [scenarioId: string]: Prompt;
    };
};

export const PROMPTS: PromptMap = {
    fr: {
        cafe: {
            goal: "You're at a café in Paris. Order a coffee and a croissant, and ask how much it costs.",
            hints: ['Use "Je voudrais..." to say "I would like..."', 'Ask "Combien ça coûte?" for the price'],
            expectedKeywords: ['café', 'coffee', 'croissant', 'voudrais', 'combien', 'price', 'cost', 'please'],
            politenessPhrases: ["s'il vous plaît", 'svp', 'merci', 'bonjour'],
        },
        greeting: {
            goal: "You're at a party in Lyon. Introduce yourself to a new friend and ask where they're from.",
            hints: ['Use "Je m\'appelle..." to say your name', 'Ask "D\'où venez-vous?" for where they\'re from'],
            expectedKeywords: ['appelle', 'name', 'from', 'where', 'hello', 'bonjour', 'enchanté'],
            politenessPhrases: ['bonjour', 'enchanté', 'ravi', 'plaisir'],
        },
        directions: {
            goal: "You're lost in Marseille. Ask someone how to get to the train station.",
            hints: ['Use "Excusez-moi..." to get attention', 'Ask "Où est la gare?"'],
            expectedKeywords: ['gare', 'station', 'train', 'où', 'where', 'how', 'get', 'direction'],
            politenessPhrases: ['excusez-moi', "s'il vous plaît", 'merci', 'pardon'],
        },
    },
    es: {
        cafe: {
            goal: "You're at a café in Madrid. Order a coffee with milk and ask if they have any pastries.",
            hints: ['Use "Quisiera..." to say "I would like..."', 'Ask "¿Tienen pasteles?"'],
            expectedKeywords: ['café', 'coffee', 'leche', 'milk', 'pasteles', 'pastry', 'have', 'quisiera'],
            politenessPhrases: ['por favor', 'gracias', 'buenos días', 'buenas tardes'],
        },
        greeting: {
            goal: "You're at a business meeting in Barcelona. Introduce yourself and ask about the other person's job.",
            hints: ['Use "Me llamo..." to say your name', 'Ask "¿A qué se dedica?"'],
            expectedKeywords: ['llamo', 'name', 'trabajo', 'work', 'job', 'dedica', 'hello', 'hola'],
            politenessPhrases: ['mucho gusto', 'encantado', 'buenos días', 'un placer'],
        },
        directions: {
            goal: "You're in Mexico City looking for the subway. Ask a local how to get there.",
            hints: ['Use "Disculpe..." to get attention', 'Ask "¿Dónde está el metro?"'],
            expectedKeywords: ['metro', 'subway', 'dónde', 'where', 'how', 'get', 'direction', 'está'],
            politenessPhrases: ['disculpe', 'por favor', 'gracias', 'perdón'],
        },
    },
    de: {
        cafe: {
            goal: "You're at a café in Berlin. Order a coffee and a pretzel, and ask for the bill.",
            hints: ['Use "Ich möchte..." to say "I would like..."', 'Ask "Die Rechnung, bitte"'],
            expectedKeywords: ['kaffee', 'coffee', 'brezel', 'pretzel', 'rechnung', 'bill', 'möchte', 'bitte'],
            politenessPhrases: ['bitte', 'danke', 'guten tag', 'entschuldigung'],
        },
        greeting: {
            goal: "You're at a networking event in Munich. Introduce yourself and ask what company they work for.",
            hints: ['Use "Ich heiße..." to say your name', 'Ask "Für welche Firma arbeiten Sie?"'],
            expectedKeywords: ['heiße', 'name', 'firma', 'company', 'arbeiten', 'work', 'hallo', 'guten tag'],
            politenessPhrases: ['freut mich', 'guten tag', 'hallo', 'schön'],
        },
        directions: {
            goal: "You're visiting Frankfurt and need to find the main train station. Ask someone for directions.",
            hints: ['Use "Entschuldigung..." to get attention', 'Ask "Wo ist der Hauptbahnhof?"'],
            expectedKeywords: ['bahnhof', 'station', 'train', 'wo', 'where', 'direction', 'hauptbahnhof'],
            politenessPhrases: ['entschuldigung', 'bitte', 'danke', 'könnten sie'],
        },
    },
    jp: {
        cafe: {
            goal: "You're at a café in Tokyo. Order a green tea and ask if they have any sweets.",
            hints: ['Use "...をください" to order', 'Ask "お菓子はありますか?"'],
            expectedKeywords: ['tea', 'matcha', 'green', 'sweets', 'okashi', 'kudasai', 'arimasu'],
            politenessPhrases: ['onegaishimasu', 'arigatou', 'sumimasen', 'kudasai'],
        },
        greeting: {
            goal: "You're meeting a colleague in Osaka. Introduce yourself and say you're happy to meet them.",
            hints: ['Use "...と申します" for formal self-introduction', 'Say "よろしくお願いします"'],
            expectedKeywords: ['name', 'moushimasu', 'hajimemashite', 'yoroshiku', 'nice', 'meet'],
            politenessPhrases: ['hajimemashite', 'yoroshiku', 'onegaishimasu', 'douzo'],
        },
        directions: {
            goal: "You're in Kyoto looking for a famous temple. Ask a local how to get there.",
            hints: ['Use "すみません..." to get attention', 'Ask "...への行き方を教えてください"'],
            expectedKeywords: ['temple', 'tera', 'doko', 'where', 'ikikata', 'direction', 'how'],
            politenessPhrases: ['sumimasen', 'onegaishimasu', 'arigatou', 'kudasai'],
        },
    },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a prompt based on language and scenario selection
 */
export function getPromptForSelection(languageId: string, scenarioId: string): Prompt | null {
    const languagePrompts = PROMPTS[languageId];
    if (!languagePrompts) return null;

    const prompt = languagePrompts[scenarioId];
    return prompt || null;
}

/**
 * Get a language by ID
 */
export function getLanguageById(id: string): Language | undefined {
    return LANGUAGES.find((lang) => lang.id === id);
}

/**
 * Get a scenario by ID
 */
export function getScenarioById(id: string): Scenario | undefined {
    return SCENARIOS.find((scenario) => scenario.id === id);
}
