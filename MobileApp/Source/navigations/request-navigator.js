import {createStackNavigator} from 'react-navigation-stack';

import RequestScreen from '../scenes/RequestScreen';

const RequestNavigatorConfig = {
  initialRouteName: 'Request',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Request: RequestScreen
};

const RequestNavigator = createStackNavigator(RouteConfigs, RequestNavigatorConfig);

export default RequestNavigator;
