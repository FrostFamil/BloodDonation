import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import HomeNavigator from './home-navigator';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    Home: HomeNavigator
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);
