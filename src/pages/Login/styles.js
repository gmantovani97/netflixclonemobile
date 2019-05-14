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
  helpText: {
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
    justifyContent: 'center',
  },
  input: {
    ...general.input,
    marginHorizontal: metrics.baseMargin,
    color: colors.whiteRegular,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin * 2,
  },
  inputView: {
    marginHorizontal: metrics.baseMargin,
  },
  button: {
    ...general.button,
    marginHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin * 2,
  },
  buttonText: {
    ...general.buttonText,
    color: colors.whiteRegular,
  },
  recoverPassword: {
    color: colors.whiteRegular,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  showPasswordButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: metrics.basePadding / 4,
  },
  showPasswordText: {
    color: colors.whiteRegular,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
