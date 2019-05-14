import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';

const Routes = createStackNavigator({
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
}, {
  initialRouteName: 'Profile',
});

export default createAppContainer(Routes);
