import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../scenes/LoginScreen';
import RegisterScreen from '../scenes/RegisterScreen';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: LoginScreen,
  Register: RegisterScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
