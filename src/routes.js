import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '~/pages/Login';

const Routes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(Routes);
