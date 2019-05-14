import colors from './colors';
import metrics from './metrics';

export default {
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    borderWidth: metrics.hairline,
  },
  button: {
    height: 50,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    borderWidth: metrics.hairline,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  // box: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   padding: metrics.basePadding / 2,
  //   backgroundColor: colors.white,
  //   borderRadius: metrics.baseRadius,
  //   marginVertical: metrics.baseMargin / 2,
  //   marginHorizontal: metrics.baseMargin,
  //   // shadow
  //   elevation: 4,
  //   shadowOpacity: 1,
  //   shadowColor: colors.light,
  //   shadowOffset: {
  //     width: 3,
  //     height: 3,
  //   },
  //   shadowRadius: metrics.baseRadius,
  //   // shadow
  // },
  // buttonText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: colors.white,
  // },
  // button: {
  //   backgroundColor: colors.secondary,
  //   borderRadius: metrics.baseRadius,
  //   height: 44,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // shadow
  //   elevation: 2,
  //   shadowOpacity: 1,
  //   shadowColor: colors.light,
  //   shadowOffset: {
  //     width: 2,
  //     height: 2,
  //   },
  //   shadowRadius: metrics.baseRadius,
  //   // shadow
  // },
  // itemInfo: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: metrics.baseMargin / 2,
  // },
  // itemInfoKey: {
  //   fontWeight: 'bold',
  //   fontSize: 14,
  //   marginHorizontal: metrics.baseMargin / 2,
  // },
  // itemInfoValue: {
  //   flex: 1,
  // },
  // borderSuccess: {
  //   borderBottomColor: colors.success,
  //   borderBottomWidth: 4,
  // },
  // borderDanger: {
  //   borderBottomColor: colors.danger,
  //   borderBottomWidth: 4,
  // },
};
