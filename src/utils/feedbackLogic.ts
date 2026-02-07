import { Prompt, Feedback } from '../types';

/**
 * Evaluate user response and generate feedback
 * Uses rule-based logic checking for keywords and politeness
 */
export function evaluateResponse(
    response: string,
    prompt: Prompt
): Feedback {
    const lowerResponse = response.toLowerCase().trim();

    // Count how many expected keywords are present
    let keywordMatches = 0;
    const matchedKeywords: string[] = [];
    const missedKeywords: string[] = [];

    for (const keyword of prompt.expectedKeywords) {
        if (lowerResponse.includes(keyword.toLowerCase())) {
            keywordMatches++;
            matchedKeywords.push(keyword);
        } else {
            missedKeywords.push(keyword);
        }
    }

    // Check for politeness phrases
    let politenesScore = 0;
    const usedPolitenessPhrases: string[] = [];

    for (const phrase of prompt.politenessPhrases) {
        if (lowerResponse.includes(phrase.toLowerCase())) {
            politenesScore++;
            usedPolitenessPhrases.push(phrase);
        }
    }

    // Calculate base score (1-5)
    const keywordRatio = prompt.expectedKeywords.length > 0
        ? keywordMatches / prompt.expectedKeywords.length
        : 0;

    const hasPoliteLanguage = politenesScore > 0;
    const responseLength = lowerResponse.length;

    // Score calculation
    let score = 1;

    if (responseLength < 5) {
        // Too short
        score = 1;
    } else if (keywordRatio >= 0.5 && hasPoliteLanguage) {
        score = 5;
    } else if (keywordRatio >= 0.4 && hasPoliteLanguage) {
        score = 4;
    } else if (keywordRatio >= 0.3 || hasPoliteLanguage) {
        score = 3;
    } else if (keywordRatio >= 0.1 || responseLength > 20) {
        score = 2;
    } else {
        score = 1;
    }

    // Generate feedback message
    let message = '';
    const suggestions: string[] = [];

    if (score >= 4) {
        message = "Excellent work! 🎉 You've communicated effectively and used polite language.";
        if (matchedKeywords.length > 0) {
            message += ` Great use of: "${matchedKeywords.slice(0, 3).join('", "')}".`;
        }
    } else if (score === 3) {
        message = "Good effort! 👍 You're on the right track.";
        if (matchedKeywords.length > 0) {
            message += ` You correctly used: "${matchedKeywords.slice(0, 2).join('", "')}".`;
        }
        if (!hasPoliteLanguage) {
            suggestions.push(`Try adding a polite phrase like "${prompt.politenessPhrases[0]}"`);
        }
        if (missedKeywords.length > 0) {
            suggestions.push(`Consider including vocabulary like: "${missedKeywords.slice(0, 2).join('", "')}"`);
        }
    } else if (score === 2) {
        message = "Nice try! Keep practicing. 📚";
        suggestions.push(`Try to include key vocabulary for this scenario`);
        if (!hasPoliteLanguage && prompt.politenessPhrases.length > 0) {
            suggestions.push(`Remember to be polite with phrases like "${prompt.politenessPhrases[0]}"`);
        }
        if (prompt.hints.length > 0) {
            suggestions.push(`Hint: ${prompt.hints[0]}`);
        }
    } else {
        message = "Let's try again! Here are some tips to help you. 💪";
        if (prompt.hints.length > 0) {
            suggestions.push(prompt.hints[0]);
        }
        if (prompt.hints.length > 1) {
            suggestions.push(prompt.hints[1]);
        }
        suggestions.push(`Use polite expressions like "${prompt.politenessPhrases[0] || 'please'}"`);
    }

    return {
        score,
        message,
        suggestions,
        isPositive: score >= 3,
    };
}

/**
 * Generate a default "try again" feedback for empty responses
 */
export function getEmptyResponseFeedback(): Feedback {
    return {
        score: 0,
        message: "Please type a response before submitting.",
        suggestions: ["Try to respond as if you're actually in this situation"],
        isPositive: false,
    };
}
