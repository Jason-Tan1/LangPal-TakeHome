import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';
import { Prompt } from '../types';

interface ConversationPromptProps {
    prompt: Prompt | null;
    isVisible: boolean;
}

export const ConversationPrompt: React.FC<ConversationPromptProps> = ({
    prompt,
    isVisible,
}) => {
    const [isHintVisible, setIsHintVisible] = useState(false);

    // Reset hint visibility when prompt changes
    useEffect(() => {
        setIsHintVisible(false);
    }, [prompt]);

    if (!isVisible) {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Your Goal</Text>
                <View style={styles.placeholderCard}>
                    <Text style={styles.placeholderText}>
                        Select a language and scenario above to see your conversation goal.
                    </Text>
                </View>
            </View>
        );
    }

    if (!prompt) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your Goal</Text>
            <View style={styles.card}>
                <View style={styles.promptContent}>
                    <Text style={styles.text}>{prompt.goal}</Text>
                    {prompt.hints.length > 0 && (
                        <View style={styles.hintsContainer}>
                            {!isHintVisible ? (
                                <TouchableOpacity
                                    style={styles.hintButton}
                                    onPress={() => setIsHintVisible(true)}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.hintButtonText}>💡 Need a hint?</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.hintContent}>
                                    <Text style={styles.hintLabel}>💡 Tip:</Text>
                                    <Text style={styles.hintText}>{prompt.hints[0]}</Text>
                                </View>
                            )}
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.l,
    },
    label: {
        color: '#FFF',
        fontSize: FONT_SIZES.s,
        marginBottom: SPACING.s,
        fontWeight: 'bold',
        opacity: 0.9,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: SPACING.l,
        borderRadius: BORDER_RADIUS.m,
        flexDirection: 'row',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    promptContent: {
        flex: 1,
    },
    text: {
        color: COLORS.text,
        fontSize: FONT_SIZES.m,
        lineHeight: 26,
        fontWeight: '500',
    },
    hintsContainer: {
        marginTop: SPACING.s,
        paddingTop: SPACING.s,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    hintButton: {
        backgroundColor: '#FFF8E1',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: COLORS.secondary,
    },
    hintButtonText: {
        color: COLORS.warning,
        fontSize: 13,
        fontWeight: '600',
    },
    hintContent: {
        marginTop: 4,
    },
    hintLabel: {
        color: COLORS.warning,
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 2,
    },
    hintText: {
        color: COLORS.textSecondary,
        fontSize: 13,
        fontStyle: 'italic',
    },
    // Placeholder styles
    placeholderCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: SPACING.l,
        borderRadius: BORDER_RADIUS.m,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderStyle: 'dashed',
    },
    placeholderText: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: FONT_SIZES.s,
        flex: 1,
        fontWeight: '500',
    },
});
