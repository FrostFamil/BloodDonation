import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from '../scenes/ProfileScreen';

const ProfileNavigatorConfig = {
  initialRouteName: 'Profile',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Profile: ProfileScreen
};

const ProfileNavigator = createStackNavigator(RouteConfigs, ProfileNavigatorConfig);

export default ProfileNavigator;
