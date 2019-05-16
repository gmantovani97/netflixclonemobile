import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    justifyContent: 'flex-start',
    backgroundColor: colors.darker,
  },
  header: {
    position: 'absolute',
    top: metrics.baseMargin * 2,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  image: {
    height: 45,
  },
  thumbnailbg: {
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.8,
  },
  fade: {
    position: 'absolute',
    bottom: 0,
    width: metrics.screenWidth,
    height: 200,
  },
  mainOptions: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  mainOptionsButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTexts: {
    fontSize: 10,
    color: colors.whiteRegular,
  },
  fadeHeader: {
    position: 'absolute',
    top: 0,
    width: metrics.screenWidth,
    height: 100,
  },
  headerButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTexts: {
    color: colors.white,
    fontWeight: '500',
  },
  watchButton: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding / 4,
  },
  watchText: {
    color: colors.black,
    fontWeight: '700',
  },
  mainCategories: {
    position: 'absolute',
    bottom: 70,
    width: metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    height: 3,
    width: 3,
    borderRadius: 1.5,
    backgroundColor: colors.primaryColor,
    margin: metrics.baseMargin / 2,
  },
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesText: {
    color: colors.white,
    fontWeight: '500',
  },
  thumbnailLogoView: {
    position: 'absolute',
    bottom: 100,
    width: metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailLogoImage: {
    height: 100,
  },
});

export default styles;
