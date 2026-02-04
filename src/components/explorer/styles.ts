import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get("window");

const responsiveWidth = (percent: number) => width * (percent / 100);
const responsiveHeight = (percent: number) => height * (percent / 100);
const responsiveFont = (size: number) => size * (width / 375);

export const Colors = {
  darkPrimary: '#121212',
  darkSecondary: '#1a1a1a',
  darkTertiary: '#2d2d2d',
  goldPrimary: '#D4AF37',
  goldSecondary: '#FFD700',
  goldAccent: '#B8860B',
  inputBackground: '#ffffff',
  inputText: '#121212',
  inputBorder: '#e0e0e0',
  grayLight: '#f5f5f5',
  grayMedium: '#e0e0e0',
  grayDark: '#b0b0b0',
  textPrimary: '#ffffff',
  textSecondary: '#cccccc',
  textDisabled: '#888888',
  success: '#27ae60',
  error: '#e74c3c',
  warning: '#f39c12',
  overlay: 'rgba(0, 0, 0, 0.7)',
  goldOverlay: 'rgba(212, 175, 55, 0.1)',
};

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },
  scrollContent: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(3),
    paddingTop: responsiveHeight(4),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
    padding: responsiveWidth(5),
  },
  fieldContainer: {
    backgroundColor: Colors.darkSecondary,
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(5),
    marginBottom: responsiveHeight(2),
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  fieldContainerGold: {
    borderColor: Colors.goldPrimary,
    borderWidth: 1.5,
  },
  fieldLabel: {
    fontSize: responsiveFont(12),
    fontWeight: '600',
    color: Colors.goldPrimary,
    marginBottom: responsiveHeight(1.5),
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  fieldValue: {
    fontSize: responsiveFont(16),
    color: Colors.textPrimary,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  fieldSubtitle: {
    fontSize: responsiveFont(13),
    color: Colors.textSecondary,
    marginTop: responsiveHeight(0.8),
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: responsiveFont(18),
    fontWeight: '600',
    color: Colors.goldPrimary,
    marginBottom: responsiveHeight(2),
    paddingLeft: responsiveWidth(2),
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  roomCardContainer: {
    width: responsiveWidth(75),
    marginRight: responsiveWidth(3),
  },
  dateInputContainer: {
    marginBottom: responsiveHeight(2),
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  guestsContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
    padding: responsiveWidth(5),
    backgroundColor: Colors.darkSecondary,
    borderRadius: responsiveWidth(3),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.inputBorder,
  },
  guestsLabel: {
    fontSize: responsiveFont(13),
    fontWeight: '600',
    color: Colors.goldPrimary,
    marginBottom: responsiveHeight(1.5),
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  inputSpinContainer: {
    width: responsiveWidth(50),
  },
  scrollViewContainer: {
    paddingHorizontal: responsiveWidth(3),
  },
  sectionContainer: {
    marginBottom: responsiveHeight(3),
  },
  goldDivider: {
    height: 1.5,
    backgroundColor: Colors.goldPrimary,
    width: responsiveWidth(50),
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.5),
    opacity: 0.5,
  },
  goldDot: {
    width: responsiveWidth(1.8),
    height: responsiveWidth(1.8),
    borderRadius: responsiveWidth(0.9),
    backgroundColor: Colors.goldPrimary,
  },
  iconGold: {
    color: Colors.goldPrimary,
  },
  iconLight: {
    color: Colors.textSecondary,
  },
  goldGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: responsiveHeight(0.3),
    backgroundColor: Colors.goldPrimary,
    opacity: 0.3,
  },
});