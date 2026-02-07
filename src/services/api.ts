import { Prompt, Feedback } from '../types';
import { getPromptForSelection } from '../constants/data';
import { evaluateResponse, getEmptyResponseFeedback } from '../utils/feedbackLogic';

// Simulated network delay for realistic loading states
const SIMULATED_DELAY_MS = 800;

/**
 * Simulate a network request with configurable delay
 */
function simulateNetworkDelay(ms: number = SIMULATED_DELAY_MS): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get the conversation prompt based on language and scenario selection
 * Simulates an API call with network delay
 */
export async function fetchPrompt(
    languageId: string,
    scenarioId: string
): Promise<{ success: true; data: Prompt } | { success: false; error: string }> {
    try {
        await simulateNetworkDelay(300); // Quick delay for prompt fetch

        const prompt = getPromptForSelection(languageId, scenarioId);

        if (!prompt) {
            return {
                success: false,
                error: 'No prompt found for this language and scenario combination.',
            };
        }

        return {
            success: true,
            data: prompt,
        };
    } catch (error) {
        return {
            success: false,
            error: 'Failed to fetch prompt. Please try again.',
        };
    }
}

/**
 * Submit user response for evaluation
 * Simulates an API call with network delay and feedback generation
 */
export async function submitResponse(
    response: string,
    languageId: string,
    scenarioId: string
): Promise<{ success: true; data: Feedback } | { success: false; error: string }> {
    try {
        // Validate input
        if (!response || response.trim().length === 0) {
            return {
                success: true,
                data: getEmptyResponseFeedback(),
            };
        }

        // Simulate network delay
        await simulateNetworkDelay();

        // Get the prompt for context
        const prompt = getPromptForSelection(languageId, scenarioId);

        if (!prompt) {
            return {
                success: false,
                error: 'Invalid language or scenario selection.',
            };
        }

        // Evaluate the response
        const feedback = evaluateResponse(response, prompt);

        return {
            success: true,
            data: feedback,
        };
    } catch (error) {
        return {
            success: false,
            error: 'Failed to evaluate response. Please try again.',
        };
    }
}

/**
 * Simulate an error for testing error states
 * Can be triggered by including "ERROR" in the response
 */
export async function submitResponseWithErrorSimulation(
    response: string,
    languageId: string,
    scenarioId: string
): Promise<{ success: true; data: Feedback } | { success: false; error: string }> {
    // Check for error simulation trigger
    if (response.toUpperCase().includes('SIMULATE_ERROR')) {
        await simulateNetworkDelay();
        return {
            success: false,
            error: 'Network error: Unable to connect to server. Please try again.',
        };
    }

    return submitResponse(response, languageId, scenarioId);
}
