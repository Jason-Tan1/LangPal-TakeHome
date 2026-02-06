import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

export const FeedbackDisplay = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Feedback</Text>
            <Text style={styles.text}>
                Great job! You requested a coffee correctly. Next time, try saying 's'il vous plaît'.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: SPACING.m,
        borderRadius: BORDER_RADIUS.m,
        marginBottom: SPACING.xl,
        borderLeftWidth: 8,
        borderLeftColor: COLORS.warning, // Yellow/Gold
    },
    label: {
        color: COLORS.textSecondary,
        fontSize: 12, // text-xs equivalent
        fontWeight: '700',
        marginBottom: SPACING.xs,
        textTransform: 'uppercase',
    },
    text: {
        color: COLORS.text,
        fontSize: FONT_SIZES.m,
        fontWeight: '500',
    },
});
