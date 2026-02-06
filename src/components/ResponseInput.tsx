import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

export const ResponseInput = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your Response</Text>
            <TextInput
                style={styles.input}
                multiline
                placeholder="Type your answer here..."
                placeholderTextColor={COLORS.textSecondary}
                textAlignVertical="top"
            />
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Send Response</Text>
            </TouchableOpacity>
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
    input: {
        backgroundColor: '#FFFFFF',
        color: COLORS.text,
        fontSize: FONT_SIZES.m,
        padding: SPACING.m,
        borderRadius: BORDER_RADIUS.m,
        minHeight: 120,
        marginBottom: SPACING.m,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.m,
        borderRadius: BORDER_RADIUS.xl,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: FONT_SIZES.m,
        fontWeight: '700',
    },
});
