import { Colors, responsiveFont, responsiveHeight, responsiveWidth } from '@/components/ui/style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
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

  imageContainer: {
    marginRight: responsiveWidth(3.5),
  },

  imagePlaceholder: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    borderRadius: responsiveWidth(3),
    backgroundColor: Colors.darkTertiary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
  },

  imageText: {
    fontSize: responsiveFont(24),
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: responsiveHeight(0.8),
  },

  roomName: {
    fontSize: responsiveFont(15),
    fontWeight: '600',
    color: Colors.goldPrimary,
    letterSpacing: 0.3,
    flex: 1,
    marginRight: responsiveWidth(2),
  },

  statusBadge: {
    backgroundColor: 'rgba(39, 174, 96, 0.15)',
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(0.3),
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
    borderColor: 'rgba(39, 174, 96, 0.3)',
  },

  status: {
    fontSize: responsiveFont(9),
    color: Colors.success,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  roomSubtitle: {
    fontSize: responsiveFont(11),
    color: Colors.textSecondary,
    marginBottom: responsiveHeight(1.2),
    letterSpacing: 0.2,
  },

  detailsRow: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(1.5),
  },

  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: responsiveWidth(4),
  },

  detailIcon: {
    fontSize: responsiveFont(11),
    marginRight: responsiveWidth(1.5),
    opacity: 0.8,
  },

  detailText: {
    fontSize: responsiveFont(10),
    color: Colors.textSecondary,
    letterSpacing: 0.2,
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: responsiveHeight(1),
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },

  roomFeatures: {
    flexDirection: 'row',
  },

  feature: {
    fontSize: responsiveFont(12),
    marginRight: responsiveWidth(2),
    opacity: 0.7,
  },

  priceContainer: {
    alignItems: 'flex-end',
  },

  priceLabel: {
    fontSize: responsiveFont(9),
    color: Colors.textSecondary,
    marginBottom: responsiveHeight(0.3),
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  price: {
    fontSize: responsiveFont(17),
    fontWeight: '600',
    color: Colors.goldPrimary,
    letterSpacing: 0.3,
  },
});