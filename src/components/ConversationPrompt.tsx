import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

export const ConversationPrompt = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your Goal</Text>
            <View style={styles.card}>
                <Text style={styles.mascot}>🦜</Text>
                <Text style={styles.text}>
                    You are at a café in Paris. Order a coffee and a croissant, and ask how much it costs.
                </Text>
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
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: SPACING.l,
        borderRadius: BORDER_RADIUS.m,
        flexDirection: 'row',
        alignItems: 'center',
    },
    mascot: {
        fontSize: 32, // text-4xl equivalent
        marginRight: SPACING.m,
    },
    text: {
        color: COLORS.text,
        fontSize: FONT_SIZES.m,
        lineHeight: 24,
        fontWeight: '500',
        flex: 1,
    },
});
