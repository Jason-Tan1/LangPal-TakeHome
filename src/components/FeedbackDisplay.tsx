import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';
import { Feedback } from '../types';

interface FeedbackDisplayProps {
    feedback: Feedback | null;
    onNewSession: () => void;
}

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({
    feedback,
    onNewSession,
}) => {
    if (!feedback) {
        return null;
    }

    // Generate star display
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Text key={i} style={styles.star}>
                    {i <= feedback.score ? '⭐' : '☆'}
                </Text>
            );
        }
        return stars;
    };

    // Determine card style based on score
    const getCardStyle = () => {
        if (feedback.score >= 4) {
            return styles.cardSuccess;
        } else if (feedback.score >= 2) {
            return styles.cardWarning;
        }
        return styles.cardError;
    };

    const getBorderColor = () => {
        if (feedback.score >= 4) {
            return COLORS.success;
        } else if (feedback.score >= 2) {
            return COLORS.warning;
        }
        return COLORS.error;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Feedback</Text>
            <View style={[styles.card, getCardStyle(), { borderLeftColor: getBorderColor() }]}>
                {/* Score Display */}
                <View style={styles.scoreContainer}>
                    <View style={styles.starsRow}>
                        {renderStars()}
                    </View>
                    <Text style={styles.scoreText}>
                        {feedback.score}/5
                    </Text>
                </View>

                {/* Message */}
                <Text style={styles.message}>{feedback.message}</Text>

                {/* Suggestions */}
                {feedback.suggestions.length > 0 && (
                    <View style={styles.suggestionsContainer}>
                        <Text style={styles.suggestionsTitle}>Suggestions:</Text>
                        {feedback.suggestions.map((suggestion, index) => (
                            <View key={index} style={styles.suggestionItem}>
                                <Text style={styles.bulletPoint}>•</Text>
                                <Text style={styles.suggestionText}>{suggestion}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Try Again Button */}
                <TouchableOpacity
                    style={styles.tryAgainButton}
                    onPress={onNewSession}
                    activeOpacity={0.8}
                >
                    <Text style={styles.tryAgainText}>Try Again</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.xl,
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
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        padding: SPACING.l,
        borderRadius: BORDER_RADIUS.m,
        borderLeftWidth: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardSuccess: {
        backgroundColor: '#F1F8E9',
    },
    cardWarning: {
        backgroundColor: '#FFF8E1',
    },
    cardError: {
        backgroundColor: '#FFEBEE',
    },
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: SPACING.m,
    },
    starsRow: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 24,
        marginRight: 2,
    },
    scoreText: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZES.s,
        fontWeight: '600',
    },
    message: {
        color: COLORS.text,
        fontSize: FONT_SIZES.m,
        fontWeight: '500',
        lineHeight: 24,
        marginBottom: SPACING.m,
    },
    suggestionsContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        padding: SPACING.m,
        borderRadius: BORDER_RADIUS.s,
        marginBottom: SPACING.m,
    },
    suggestionsTitle: {
        color: COLORS.text,
        fontSize: 13,
        fontWeight: '700',
        marginBottom: SPACING.s,
    },
    suggestionItem: {
        flexDirection: 'row',
        marginBottom: SPACING.xs,
    },
    bulletPoint: {
        color: COLORS.primary,
        fontSize: 14,
        marginRight: SPACING.xs,
        fontWeight: '700',
    },
    suggestionText: {
        color: COLORS.textSecondary,
        fontSize: 14,
        flex: 1,
        lineHeight: 20,
    },
    tryAgainButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.s,
        paddingHorizontal: SPACING.m,
        borderRadius: BORDER_RADIUS.xl,
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    tryAgainText: {
        color: '#FFFFFF',
        fontSize: FONT_SIZES.s,
        fontWeight: '700',
    },
});
