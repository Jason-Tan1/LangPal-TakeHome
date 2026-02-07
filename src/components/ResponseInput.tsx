import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants/theme';

interface ResponseInputProps {
    value: string;
    onChange: (text: string) => void;
    onSubmit: () => void;
    isLoading: boolean;
    isDisabled: boolean;
    onFocus?: () => void;
}

export const ResponseInput: React.FC<ResponseInputProps> = ({
    value,
    onChange,
    onSubmit,
    isLoading,
    isDisabled,
    onFocus,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Your Response</Text>
            <TextInput
                style={styles.input}
                multiline
                value={value}
                onChangeText={onChange}
                onFocus={onFocus}
                placeholder="Type your response here..."
                placeholderTextColor={COLORS.textSecondary}
                textAlignVertical="top"
                editable={!isLoading}
                blurOnSubmit={true}
                returnKeyType="done"
            />
            <TouchableOpacity
                style={[
                    styles.button,
                    isDisabled && styles.buttonDisabled,
                ]}
                activeOpacity={0.8}
                onPress={onSubmit}
                disabled={isDisabled}
            >
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator color="#FFFFFF" size="small" />
                        <Text style={styles.buttonText}>Evaluating...</Text>
                    </View>
                ) : (
                    <Text style={styles.buttonText}>
                        Send Response
                    </Text>
                )}
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
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        minHeight: 52,
    },
    buttonDisabled: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: FONT_SIZES.m,
        fontWeight: '700',
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.s,
    },
});
