import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

export const LanguageSelector = () => {
    // Mock data for display only
    const languages = [
        { id: 'fr', name: 'French', flag: '🇫🇷', selected: true },
        { id: 'es', name: 'Spanish', flag: '🇪🇸', selected: false },
        { id: 'de', name: 'German', flag: '🇩🇪', selected: false },
        { id: 'jp', name: 'Japanese', flag: '🇯🇵', selected: false },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Choose a Language</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {languages.map((lang) => (
                    <TouchableOpacity
                        key={lang.id}
                        style={[
                            styles.option,
                            lang.selected ? styles.optionSelected : styles.optionUnselected
                        ]}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.flag}>{lang.flag}</Text>
                        <Text style={[
                            styles.name,
                            lang.selected ? styles.nameSelected : styles.nameUnselected
                        ]}>
                            {lang.name}
                        </Text>
                    </TouchableOpacity>
                ))}
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
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    optionSelected: {
        backgroundColor: '#FFFFFF',
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
