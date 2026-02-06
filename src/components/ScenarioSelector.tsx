import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

export const ScenarioSelector = () => {
    const scenarios = [
        {
            id: 'cafe',
            title: 'Ordering Coffee',
            desc: 'Order a drink and a snack at a local cafe.',
            emoji: '☕',
            selected: true
        },
        {
            id: 'greeting',
            title: 'Meeting Someone',
            desc: 'Introduce yourself to a stranger.',
            emoji: '👋',
            selected: false
        },
        {
            id: 'directions',
            title: 'Asking Directions',
            desc: 'Ask someone how to get to the train station.',
            emoji: '🗺️',
            selected: false
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Choose a Scenario</Text>
            <View style={styles.grid}>
                {scenarios.map((s) => (
                    <TouchableOpacity
                        key={s.id}
                        style={[
                            styles.card,
                            s.selected ? styles.cardSelected : styles.cardUnselected
                        ]}
                        activeOpacity={0.8}
                    >
                        <View style={styles.header}>
                            <Text style={styles.emoji}>{s.emoji}</Text>
                            <Text style={[
                                styles.title,
                                s.selected ? styles.titleSelected : styles.titleUnselected
                            ]}>
                                {s.title}
                            </Text>
                        </View>
                        <Text style={styles.description}>
                            {s.desc}
                        </Text>
                    </TouchableOpacity>
                ))}
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
    grid: {
        gap: SPACING.s,
    },
    card: {
        padding: SPACING.m,
        borderRadius: BORDER_RADIUS.m,
        borderWidth: 2,
    },
    cardSelected: {
        borderColor: COLORS.primary,
        backgroundColor: '#FFF8E1', // orange-50 equivalent
    },
    cardUnselected: {
        borderColor: 'transparent',
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xs,
    },
    emoji: {
        fontSize: FONT_SIZES.l,
        marginRight: SPACING.s,
    },
    title: {
        fontSize: FONT_SIZES.m,
        fontWeight: '700',
    },
    titleSelected: {
        color: COLORS.primary,
    },
    titleUnselected: {
        color: COLORS.text,
    },
    description: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZES.s,
        lineHeight: 20,
    },
});
