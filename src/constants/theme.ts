import { moderateScale, verticalScale } from '../utils/responsive';

export const COLORS = {
    // Gradient Colors
    gradientStart: '#FFD54F', // Warm Yellow
    gradientEnd: '#FF7043',   // Deep Orange

    // UI Colors
    background: '#FFF3E0', // Very light orange/cream
    surface: '#FFFFFF',

    // Brand
    primary: '#FF5722', // Deep Orange/Red (Button color)
    secondary: '#FFB74D',
    accent: '#FFD700', // Gold

    // Text
    text: '#4E342E', // Dark Brown (softer than black)
    textSecondary: '#8D6E63', // Light Brown
    textLight: '#FFFFFF',

    // Status
    success: '#66BB6A',
    warning: '#FFA726',
    error: '#EF5350',

    border: '#FFE0B2',
    inputBackground: '#FAFAFA',
};

export const SPACING = {
    xs: moderateScale(4),
    s: moderateScale(8),
    m: moderateScale(16),
    l: moderateScale(24),
    xl: moderateScale(32),
};

export const FONT_SIZES = {
    s: moderateScale(14),
    m: moderateScale(18),
    l: moderateScale(24),
    xl: moderateScale(32),
    xxl: moderateScale(40),
};

export const BORDER_RADIUS = {
    s: moderateScale(8),
    m: moderateScale(16),
    l: moderateScale(24),
    xl: moderateScale(32),
};

export const FONTS = {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
    extraBold: 'Inter_800ExtraBold',
    black: 'Inter_900Black',
};
