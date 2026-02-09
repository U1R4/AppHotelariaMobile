import { Dimensions, StyleSheet } from 'react-native';
const {width, height} = Dimensions.get("window");

const responsiveWidth = (percent: number) => {
  const width = Dimensions.get('window').width;
  return width * (percent / 100);
};

const responsiveHeight = (percent: number) => {
  const height = Dimensions.get('window').height;
  return height * (percent / 100);
};

const responsiveFont = (size: number) => {
  const width = Dimensions.get('window').width;
  return size * (width / 375);
};

export { responsiveFont, responsiveHeight, responsiveWidth };

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
  cardBackground: '#1a1a1a',
};

export const global = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },

  dateSelectorContainer: {
  width: '100%',
  maxWidth: responsiveWidth(95),
  backgroundColor: Colors.darkSecondary,
  borderRadius: responsiveWidth(4),
  padding: responsiveWidth(4),
  borderWidth: 1.5,
  borderColor: Colors.goldPrimary,
  shadowColor: Colors.goldPrimary,
  shadowOffset: { width: 0, height: responsiveHeight(0.5) },
  shadowOpacity: 0.3,
  shadowRadius: responsiveWidth(4),
  elevation: 15,
},

dateSelectorHeader: {
  width: '100%',
  alignItems: 'center',
  marginBottom: responsiveHeight(1),
},

dateSelectorTitle: {
  fontSize: responsiveFont(18),
  fontWeight: '600',
  color: Colors.goldPrimary,
  marginBottom: responsiveHeight(1),
},

dateSelectorCalendarContainer: {
  borderRadius: responsiveWidth(3),
  overflow: 'hidden',
  marginBottom: responsiveHeight(2),
},

dateSelectorButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: responsiveHeight(2),
},

dateSelectorCancelButton: {
  flex: 1,
  marginRight: responsiveWidth(2),
  backgroundColor: Colors.darkTertiary,
  paddingVertical: responsiveHeight(1.8),
  borderRadius: responsiveWidth(2.5),
  borderWidth: 1,
  borderColor: Colors.textSecondary,
  alignItems: 'center',
  justifyContent: 'center',
},

dateSelectorConfirmButton: {
  flex: 1,
  marginLeft: responsiveWidth(2),
  backgroundColor: Colors.goldPrimary,
  paddingVertical: responsiveHeight(1.8),
  borderRadius: responsiveWidth(2.5),
  borderWidth: 1,
  borderColor: Colors.goldAccent,
  alignItems: 'center',
  justifyContent: 'center',
},

dateSelectorCancelText: {
  color: Colors.textSecondary,
  fontSize: responsiveFont(14),
  fontWeight: '600',
},

dateSelectorConfirmText: {
  color: Colors.darkPrimary,
  fontSize: responsiveFont(14),
  fontWeight: '700',
},

// Estilos para o DatePicker customizado
datePickerContainer: {
  backgroundColor: Colors.darkSecondary,
  borderRadius: responsiveWidth(3),
  padding: responsiveWidth(2),
},

datePickerHeader: {
  backgroundColor: Colors.darkTertiary,
  borderRadius: responsiveWidth(2),
  padding: responsiveWidth(3),
  marginBottom: responsiveHeight(1),
},

datePickerMonthYear: {
  fontSize: responsiveFont(18),
  color: Colors.goldPrimary,
  fontWeight: '600',
  textAlign: 'center',
},

datePickerWeekDays: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginBottom: responsiveHeight(1),
},

datePickerWeekDay: {
  fontSize: responsiveFont(12),
  color: Colors.textSecondary,
  fontWeight: '500',
  width: responsiveWidth(10),
  textAlign: 'center',
},

datePickerDaysContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
},

datePickerDay: {
  width: responsiveWidth(12),
  height: responsiveWidth(12),
  justifyContent: 'center',
  alignItems: 'center',
  margin: responsiveWidth(0.5),
  borderRadius: responsiveWidth(2),
},

datePickerDayText: {
  fontSize: responsiveFont(14),
  fontWeight: '500',
},

datePickerSelectedDay: {
  backgroundColor: Colors.goldPrimary,
},

datePickerSelectedDayText: {
  color: Colors.darkPrimary,
  fontWeight: '700',
},

datePickerCurrentDay: {
  backgroundColor: Colors.darkTertiary,
  borderWidth: 1,
  borderColor: Colors.goldPrimary,
},

datePickerCurrentDayText: {
  color: Colors.goldPrimary,
},

datePickerDisabledDay: {
  opacity: 0.3,
},

datePickerDisabledDayText: {
  color: Colors.textDisabled,
},

  KeyboardAvoiding: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },
  header: {
    alignItems: "center",
    marginBottom: responsiveHeight(4),
    paddingTop: responsiveHeight(3),
  },
  content: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFont(32),
    fontWeight: "300",
    color: Colors.goldPrimary,
    marginTop: responsiveHeight(2),
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: responsiveFont(18),
    fontWeight: "400",
    color: Colors.textSecondary,
    marginTop: responsiveHeight(1),
    textAlign: "center",
  },
  textWhite: {
    color: Colors.textPrimary,
  },
  textGold: {
    color: Colors.goldPrimary,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: responsiveWidth(2.5),
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: responsiveWidth(2.5),
    backgroundColor: Colors.inputBackground,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(1.8),
    minHeight: responsiveHeight(6),
    width: '100%',
  },
  icon: {
    marginRight: responsiveWidth(3),
    color: Colors.textDisabled,
  },
  inpError: {
    borderColor: Colors.error,
    borderWidth: 1.5,
  },
  errotext: {
    color: Colors.error,
    fontSize: responsiveFont(12),
    marginTop: responsiveHeight(0.5),
  },
  eyeIcon: {
    position: "absolute",
    right: responsiveWidth(4),
    top: responsiveHeight(3.5),
  },
  modalView: {
    backgroundColor: Colors.darkSecondary,
    borderRadius: responsiveWidth(5),
    padding: responsiveWidth(6),
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: Colors.goldPrimary,
    shadowColor: Colors.goldPrimary,
    shadowOffset: { width: 0, height: responsiveHeight(0.5) },
    shadowOpacity: 0.2,
    shadowRadius: responsiveWidth(3),
    elevation: 10,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.overlay,
  },
  button: {
    backgroundColor: Colors.darkTertiary,
    paddingVertical: responsiveHeight(1.8),
    paddingHorizontal: responsiveWidth(8),
    borderRadius: responsiveWidth(2.5),
    borderWidth: 1.5,
    borderColor: Colors.goldPrimary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.goldPrimary,
    fontSize: responsiveFont(15),
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  dateText: {
    color: Colors.textSecondary,
    fontSize: responsiveFont(14),
  },

  modalOverlay: {
  flex: 1,
  backgroundColor: Colors.overlay,
  justifyContent: 'center',
  alignItems: 'center',
  padding: responsiveWidth(5),
},

modalContent: {
  width: '100%',
  maxWidth: responsiveWidth(90),
},
  iosPicker: {
    backgroundColor: Colors.darkTertiary,
    borderRadius: responsiveWidth(3),
  },
  closeButton: {
    backgroundColor: Colors.darkTertiary,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: responsiveWidth(2.5),
    marginTop: responsiveHeight(2),
    borderWidth: 1,
    borderColor: Colors.goldPrimary,
  },
  closeButtonText: {
    color: Colors.goldPrimary,
    fontSize: responsiveFont(14),
    fontWeight: "600",
  },
  label: {
    fontSize: responsiveFont(11),
    fontWeight: '600',
    color: Colors.goldPrimary,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  iconContainer: {
    marginLeft: responsiveWidth(2),
  },
  titleCard: {
    fontSize: responsiveFont(14),
    fontWeight: '600',
    marginBottom: responsiveHeight(0.3),
    color: Colors.goldPrimary,
    letterSpacing: 0.5,
  },
  priceContainer: {
    marginLeft: responsiveWidth(2),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  price: {
    fontSize: responsiveFont(16),
    fontWeight: 'bold',
    color: Colors.goldPrimary,
  },

  imageFixed: {
    borderRadius: responsiveWidth(3),
    height: responsiveHeight(16),
    width: '100%',
    marginBottom: responsiveHeight(1),
  },
  cardContentFixed: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textFixed: {
    color: Colors.textSecondary,
    fontSize: responsiveFont(10),
    lineHeight: responsiveFont(13),
  },
  descriptionContainerFixed: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
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
  fieldSubtitle: {
    fontSize: responsiveFont(12),
    color: Colors.textSecondary,
    marginTop: responsiveHeight(0.8),
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: responsiveFont(16),
    fontWeight: '600',
    color: Colors.goldPrimary,
    marginBottom: responsiveHeight(2),
    paddingLeft: responsiveWidth(2),
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  goldDivider: {
    height: 1.5,
    backgroundColor: Colors.goldPrimary,
    width: responsiveWidth(50),
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.5),
    opacity: 0.5,
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
  scrollViewContainer: {
    paddingHorizontal: responsiveWidth(3),
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
  inputSpinContainer: {
    width: responsiveWidth(50),
  },
  sectionContainer: {
    marginBottom: responsiveHeight(3),
  },
  goldDot: {
    width: responsiveWidth(1.8),
    height: responsiveWidth(1.8),
    borderRadius: responsiveWidth(0.9),
    backgroundColor: Colors.goldPrimary,
  },

  // NOVOS ESTILOS PARA RESERVECARD (Hotel de luxo minimalista)
  reserveCard: {
    flexDirection: 'row',
    backgroundColor: Colors.darkSecondary,
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(3.5),
    marginBottom: responsiveHeight(2),
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.15)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  reserveImageContainer: {
    marginRight: responsiveWidth(3.5),
  },

  reserveImagePlaceholder: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    borderRadius: responsiveWidth(3),
    backgroundColor: Colors.darkTertiary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
  },

  reserveImageText: {
    fontSize: responsiveFont(24),
  },

  reserveContentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  reserveHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(0.8),
  },

  reserveRoomName: {
    fontSize: responsiveFont(15),
    fontWeight: '600',
    color: Colors.goldPrimary,
    letterSpacing: 0.3,
    flex: 1,
    marginRight: responsiveWidth(2),
  },

  reserveStatusBadge: {
    backgroundColor: 'rgba(39, 174, 96, 0.15)',
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(0.3),
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
    borderColor: 'rgba(39, 174, 96, 0.3)',
  },

  reserveStatus: {
    fontSize: responsiveFont(9),
    color: Colors.success,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  reserveRoomSubtitle: {
    fontSize: responsiveFont(11),
    color: Colors.textSecondary,
    marginBottom: responsiveHeight(1.2),
    letterSpacing: 0.2,
  },

  reserveDetailsRow: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(1.5),
  },

  reserveDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: responsiveWidth(4),
  },

  reserveDetailIcon: {
    fontSize: responsiveFont(11),
    marginRight: responsiveWidth(1.5),
    opacity: 0.8,
  },

  reserveDetailText: {
    fontSize: responsiveFont(10),
    color: Colors.textSecondary,
    letterSpacing: 0.2,
  },

  reserveFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: responsiveHeight(1),
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },

  reserveRoomFeatures: {
    flexDirection: 'row',
  },

  reserveFeature: {
    fontSize: responsiveFont(12),
    marginRight: responsiveWidth(2),
    opacity: 0.7,
  },

  reservePriceContainer: {
    alignItems: 'flex-end',
  },

  reservePriceLabel: {
    fontSize: responsiveFont(9),
    color: Colors.textSecondary,
    marginBottom: responsiveHeight(0.3),
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  reservePrice: {
    fontSize: responsiveFont(17),
    fontWeight: '600',
    color: Colors.goldPrimary,
    letterSpacing: 0.3,
  },

  // Estilos para página de reservas
  reserveHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.1)',
  },

  reserveBackButton: {
    padding: responsiveWidth(1),
  },

  reserveHeaderTitle: {
    fontSize: responsiveFont(18),
    fontWeight: '500',
    color: Colors.goldPrimary,
    letterSpacing: 0.5,
  },

  reservePlaceholder: {
    width: responsiveWidth(8),
  },

  reserveScrollContent: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2.5),
    paddingBottom: responsiveHeight(12),
  },

  reserveIntroSection: {
    marginBottom: responsiveHeight(3),
  },

  reserveIntroTitle: {
    fontSize: responsiveFont(22),
    fontWeight: '300',
    color: Colors.goldPrimary,
    marginBottom: responsiveHeight(0.5),
    letterSpacing: 0.5,
  },

  reserveIntroSubtitle: {
    fontSize: responsiveFont(14),
    color: Colors.textSecondary,
    letterSpacing: 0.3,
  },

  reserveEmptyState: {
    alignItems: 'center',
    paddingVertical: responsiveHeight(5),
    opacity: 0.6,
  },

  reserveEmptyText: {
    fontSize: responsiveFont(14),
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },

  reserveBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.darkPrimary,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 175, 55, 0.1)',
  },

  reserveActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkTertiary,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: responsiveWidth(3),
    borderWidth: 1.5,
    borderColor: Colors.goldPrimary,
  },

  reserveActionButtonText: {
    color: Colors.goldPrimary,
    fontSize: responsiveFont(16),
    fontWeight: '600',
    letterSpacing: 0.5,
    marginRight: responsiveWidth(2),
  },

  reservePageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.1)',
  },

  reservePageBackButton: {
    padding: responsiveWidth(1),
  },

  reservePageHeaderTitle: {
    fontSize: responsiveFont(18),
    fontWeight: '500',
    color: Colors.goldPrimary,
    letterSpacing: 0.5,
  },

  reservePagePlaceholder: {
    width: responsiveWidth(8),
  },

  reservePageScrollContent: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2.5),
    paddingBottom: responsiveHeight(12),
  },

  reservePageIntroSection: {
    marginBottom: responsiveHeight(3),
  },

  reservePageIntroTitle: {
    fontSize: responsiveFont(22),
    fontWeight: '300',
    color: Colors.goldPrimary,
    marginBottom: responsiveHeight(0.5),
    letterSpacing: 0.5,
  },

  reservePageIntroSubtitle: {
    fontSize: responsiveFont(14),
    color: Colors.textSecondary,
    letterSpacing: 0.3,
  },

  reservePageEmptyState: {
    alignItems: 'center',
    paddingVertical: responsiveHeight(5),
    opacity: 0.6,
  },

  reservePageEmptyText: {
    fontSize: responsiveFont(14),
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },

  reservePageBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.darkPrimary,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 175, 55, 0.1)',
  },

  reservePageActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkTertiary,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: responsiveWidth(3),
    borderWidth: 1.5,
    borderColor: Colors.goldPrimary,
  },

  reservePageActionButtonText: {
    color: Colors.goldPrimary,
    fontSize: responsiveFont(16),
    fontWeight: '600',
    letterSpacing: 0.5,
    marginRight: responsiveWidth(2),
  },

  roomCardReserveButtonText: {
    color: Colors.darkPrimary,
    fontSize: responsiveFont(14),
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // Estilos para o BottomSheet de reserva
  bottomSheetReserveContent: {
    padding: responsiveWidth(5),
    flex: 1,
  },

  bottomSheetReserveTitle: {
    fontSize: responsiveFont(24),
    fontWeight: '700',
    color: Colors.goldPrimary,
    marginBottom: responsiveHeight(3),
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  bottomSheetReserveCard: {
    backgroundColor: Colors.darkSecondary,
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(4),
    marginBottom: responsiveHeight(3),
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.15)',
  },

  bottomSheetReserveCardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 175, 55, 0.1)',
    paddingBottom: responsiveHeight(1.5),
    marginBottom: responsiveHeight(2),
  },

  bottomSheetReserveRoomLabel: {
    fontSize: responsiveFont(16),
    fontWeight: '600',
    color: Colors.goldPrimary,
    letterSpacing: 0.3,
  },

  bottomSheetReserveCardBody: {
    paddingVertical: responsiveHeight(0.5),
  },

  bottomSheetReserveRoomTitle: {
    fontSize: responsiveFont(14),
    fontWeight: '500',
    color: Colors.textPrimary,
    marginBottom: responsiveHeight(1),
    letterSpacing: 0.2,
  },

  bottomSheetReserveRoomDescription: {
    fontSize: responsiveFont(12),
    color: Colors.textSecondary,
    marginBottom: responsiveHeight(2),
    lineHeight: responsiveFont(16),
    letterSpacing: 0.1,
  },

  bottomSheetReservePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: responsiveHeight(1.5),
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 175, 55, 0.1)',
  },

  bottomSheetReservePriceLabel: {
    fontSize: responsiveFont(12),
    color: Colors.textSecondary,
    fontWeight: '500',
  },

  bottomSheetReservePrice: {
    fontSize: responsiveFont(20),
    fontWeight: '700',
    color: Colors.goldPrimary,
  },

  bottomSheetReserveDivider: {
    height: 1,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    marginVertical: responsiveHeight(2),
  },

  bottomSheetReserveActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },

  bottomSheetReserveCancelButton: {
    flex: 1,
    marginRight: responsiveWidth(2),
    backgroundColor: Colors.darkTertiary,
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(2.5),
    borderWidth: 1,
    borderColor: Colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomSheetReserveCancelButtonText: {
    color: Colors.textSecondary,
    fontSize: responsiveFont(14),
    fontWeight: '600',
  },

  bottomSheetReserveConfirmButton: {
    flex: 1,
    marginLeft: responsiveWidth(2),
    backgroundColor: Colors.goldPrimary,
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(2.5),
    borderWidth: 1,
    borderColor: Colors.goldAccent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomSheetReserveConfirmButtonText: {
    color: Colors.darkPrimary,
    fontSize: responsiveFont(14),
    fontWeight: '700',
  },

  roomCardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(0.8),
  },

  roomCardDescriptionText: {
    lineHeight: responsiveFont(13),
  },

cardContainer: {
  width: responsiveWidth(75),
  height: responsiveHeight(40),
  borderRadius: responsiveWidth(4),
  borderWidth: 1,
  borderColor: 'red',
},

touchableFixed: {
  borderRadius: responsiveWidth(4),
  padding: responsiveWidth(2.5),
  height: responsiveHeight(30),
  backgroundColor: Colors.cardBackground,
  borderWidth: 1.5,
  borderColor: Colors.goldPrimary,
},

roomCardReserveButton: {
  backgroundColor: Colors.goldPrimary,
  paddingVertical: responsiveHeight(1.5),
  paddingHorizontal: responsiveWidth(6),
  borderRadius: responsiveWidth(2.5),
  marginTop: responsiveHeight(1.5),
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1.5,
  borderColor: Colors.goldAccent,
  shadowColor: Colors.goldPrimary,
  shadowOffset: { width: 0, height: responsiveHeight(0.3) },
  shadowOpacity: 0.3,
  shadowRadius: responsiveWidth(2),
  elevation: 5,

},
});