import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, SafeAreaView, Platform, StatusBar, StyleSheet, Image, Alert, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';
import { LANGUAGES, SCENARIOS, getPromptForSelection } from '../constants/data';
import { submitResponse } from '../services/api';
import { Language, Scenario, Prompt, Feedback } from '../types';

import { LanguageSelector } from '../components/LanguageSelector';
import { ScenarioSelector } from '../components/ScenarioSelector';
import { ConversationPrompt } from '../components/ConversationPrompt';
import { ResponseInput } from '../components/ResponseInput';
import { FeedbackDisplay } from '../components/FeedbackDisplay';

export const HomeScreen = () => {
    // State management
    const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
    const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
    const [userResponse, setUserResponse] = useState('');
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Get current prompt based on selections
    const currentPrompt: Prompt | null =
        selectedLanguage && selectedScenario
            ? getPromptForSelection(selectedLanguage.id, selectedScenario.id)
            : null;

    // Handle language selection
    const handleLanguageSelect = useCallback((language: Language) => {
        setSelectedLanguage(prev => prev?.id === language.id ? null : language);
        setFeedback(null); // Clear feedback when selection changes
        setError(null);
    }, []);

    // Handle scenario selection
    const handleScenarioSelect = useCallback((scenario: Scenario) => {
        setSelectedScenario(prev => prev?.id === scenario.id ? null : scenario);
        setFeedback(null); // Clear feedback when selection changes
        setError(null);
    }, []);

    // Handle response input change
    const handleResponseChange = useCallback((text: string) => {
        setUserResponse(text);
        setError(null);
    }, []);

    // Handle response submission
    const handleSubmit = useCallback(async () => {
        // Validation with Alert Popup
        if (!selectedLanguage) {
            Alert.alert("Selection Required", "Please choose a language to continue.");
            return;
        }

        if (!selectedScenario) {
            Alert.alert("Selection Required", "Please choose a scenario to continue.");
            return;
        }

        if (!userResponse.trim()) {
            Alert.alert("Response Required", "Please type your response before sending.");
            return;
        }

        setIsLoading(true);
        setError(null);
        setFeedback(null);

        try {
            const result = await submitResponse(
                userResponse,
                selectedLanguage.id,
                selectedScenario.id
            );

            if (result.success) {
                setFeedback(result.data);
            } else {
                // TypeScript needs help narrowing here sometimes
                const errorResult = result as { success: false; error: string };
                setError(errorResult.error);
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [selectedLanguage, selectedScenario, userResponse]);



    // Handle starting a new practice session
    const handleNewSession = useCallback(() => {
        setFeedback(null);
        setUserResponse('');
        setError(null);
    }, []);

    // Only disable if currently loading
    const isSubmitDisabled = isLoading;

    // Create a ref for the ScrollView
    const scrollViewRef = React.useRef<ScrollView>(null);

    // Function to scroll to bottom when input is focused
    const handleInputFocus = () => {
        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 150);
    };

    return (
        <LinearGradient
            colors={[COLORS.gradientStart, COLORS.gradientEnd]}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/LangPal-Logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
                >
                    <ScrollView
                        ref={scrollViewRef}
                        style={styles.scrollView}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.content}
                        keyboardShouldPersistTaps="handled"
                    >
                        {/* Language Selection */}
                        <LanguageSelector
                            languages={LANGUAGES}
                            selectedLanguage={selectedLanguage}
                            onSelect={handleLanguageSelect}
                        />

                        {/* Scenario Selection */}
                        <ScenarioSelector
                            scenarios={SCENARIOS}
                            selectedScenario={selectedScenario}
                            onSelect={handleScenarioSelect}
                        />

                        {/* Conversation Prompt */}
                        <ConversationPrompt
                            prompt={currentPrompt}
                            isVisible={!!selectedLanguage && !!selectedScenario}
                        />

                        {/* Error Display */}
                        {error && (
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>⚠️ {error}</Text>
                            </View>
                        )}

                        {/* Response Input */}
                        <ResponseInput
                            value={userResponse}
                            onChange={handleResponseChange}
                            onSubmit={handleSubmit}
                            isLoading={isLoading}
                            isDisabled={isSubmitDisabled}
                            onFocus={handleInputFocus}
                        />

                        {/* Feedback Display */}
                        <FeedbackDisplay
                            feedback={feedback}
                            onNewSession={handleNewSession}
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0,
    },
    header: {
        alignItems: 'center',
        paddingVertical: SPACING.m,
        marginBottom: SPACING.xs,
    },
    logo: {
        width: 180,
        height: 60,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: SPACING.m,
    },
    content: {
        paddingBottom: 250, // Extra padding to ensure input is fully visible above keyboard
    },
    errorContainer: {
        backgroundColor: 'rgba(244, 67, 54, 0.9)',
        padding: SPACING.m,
        borderRadius: BORDER_RADIUS.m,
        marginBottom: SPACING.m,
    },
    errorText: {
        color: '#FFFFFF',
        fontSize: FONT_SIZES.s,
        fontWeight: '600',
        textAlign: 'center',
    },
});
