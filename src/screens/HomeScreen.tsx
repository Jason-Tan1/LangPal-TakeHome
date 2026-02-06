import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, FONT_SIZES } from '../constants/theme';

import { LanguageSelector } from '../components/LanguageSelector';
import { ScenarioSelector } from '../components/ScenarioSelector';
import { ConversationPrompt } from '../components/ConversationPrompt';
import { ResponseInput } from '../components/ResponseInput';
import { FeedbackDisplay } from '../components/FeedbackDisplay';

export const HomeScreen = () => {
    return (
        <LinearGradient
            colors={[COLORS.gradientStart, COLORS.gradientEnd]}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>LangPal</Text>
                </View>

                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >
                    <LanguageSelector />
                    <ScenarioSelector />
                    <ConversationPrompt />
                    <ResponseInput />
                    <FeedbackDisplay />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0,
    },
    header: {
        alignItems: 'center',
        paddingVertical: SPACING.m,
        marginBottom: SPACING.xs,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: FONT_SIZES.l, // 2xl equivalent roughly
        fontWeight: '800', // extrabold
        letterSpacing: 2, // tracking-widest
        textTransform: 'uppercase',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: SPACING.m,
    },
    content: {
        paddingBottom: SPACING.xl,
    },
});
