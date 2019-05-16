import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import MainPage from '~/pages/MainPage';

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
    MainPage: {
      screen: MainPage,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'MainPage',
  },
);

export default createAppContainer(Routes);
