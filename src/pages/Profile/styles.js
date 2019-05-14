import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    justifyContent: 'flex-start',
    backgroundColor: colors.darker,
    padding: metrics.basePadding,
  },
  header: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },
  image: {
    height: 35,
  },
  editText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    ...general.container,
  },
  titleView: {
    marginVertical: metrics.baseMargin * 4,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  thumbnail: {
    height: 120,
    width: 120,
  },
  columnStyle: {
    justifyContent: 'space-around',
    marginBottom: metrics.baseMargin * 2,
  },
  thumbnailText: {
    fontSize: 18,
    color: colors.whiteRegular,
    fontWeight: '400',
  },
  thumbnailView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  editOpacity: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: colors.darkTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
