import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';
import { Scenario } from '../types';

interface ScenarioSelectorProps {
    scenarios: Scenario[];
    selectedScenario: Scenario | null;
    onSelect: (scenario: Scenario) => void;
}

export const ScenarioSelector: React.FC<ScenarioSelectorProps> = ({
    scenarios,
    selectedScenario,
    onSelect,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Choose a Scenario</Text>
            <View style={styles.grid}>
                {scenarios.map((scenario) => {
                    const isSelected = selectedScenario?.id === scenario.id;
                    return (
                        <TouchableOpacity
                            key={scenario.id}
                            style={[
                                styles.card,
                                isSelected ? styles.cardSelected : styles.cardUnselected
                            ]}
                            activeOpacity={0.8}
                            onPress={() => onSelect(scenario)}
                        >
                            <View style={styles.header}>
                                <Text style={[
                                    styles.title,
                                    isSelected ? styles.titleSelected : styles.titleUnselected
                                ]}>
                                    {scenario.title}
                                </Text>
                            </View>
                            <Text style={styles.description}>
                                {scenario.description}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
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
        backgroundColor: '#FFF8E1',
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
