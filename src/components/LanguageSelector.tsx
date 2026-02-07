import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';
import { Language } from '../types';

interface LanguageSelectorProps {
    languages: Language[];
    selectedLanguage: Language | null;
    onSelect: (language: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    languages,
    selectedLanguage,
    onSelect,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Choose a Language</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {languages.map((lang) => {
                    const isSelected = selectedLanguage?.id === lang.id;
                    return (
                        <TouchableOpacity
                            key={lang.id}
                            style={[
                                styles.option,
                                isSelected ? styles.optionSelected : styles.optionUnselected
                            ]}
                            activeOpacity={0.8}
                            onPress={() => onSelect(lang)}
                        >
                            <Text style={styles.flag}>{lang.flag}</Text>
                            <Text style={[
                                styles.name,
                                isSelected ? styles.nameSelected : styles.nameUnselected
                            ]}>
                                {lang.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
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
    scrollContent: {
        paddingRight: SPACING.m,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.s,
        paddingHorizontal: SPACING.m,
        borderRadius: BORDER_RADIUS.xl,
        marginRight: SPACING.s,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    optionSelected: {
        backgroundColor: '#FFFFFF',
        borderColor: COLORS.primary,
    },
    optionUnselected: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    flag: {
        fontSize: FONT_SIZES.m,
        marginRight: SPACING.s,
    },
    name: {
        fontSize: FONT_SIZES.m,
        fontWeight: '500',
    },
    nameSelected: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    nameUnselected: {
        color: '#FFFFFF',
    },
});
