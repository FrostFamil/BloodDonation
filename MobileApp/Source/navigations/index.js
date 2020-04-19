import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import HomeNavigator from './home-navigator';
import ProfileNavigator from './profile-navigator';
import RequestNavigator from './request-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Home: HomeNavigator,
    Profile: ProfileNavigator,
    Request: RequestNavigator
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
