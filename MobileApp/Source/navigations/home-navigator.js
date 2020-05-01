import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../scenes/HomeScreen';

const HomeNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home: HomeScreen
};

const HomeNavigator = createStackNavigator(RouteConfigs, HomeNavigatorConfig);

export default HomeNavigator;
