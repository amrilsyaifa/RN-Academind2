import {Navigation} from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'

//Register Screen
Navigation.registerComponent("awesome-places.AuthScreen",() => AuthScreen);

//Start

Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'awesome-places.AuthScreen',
          passProps: {
            text: 'stack with one child'
          }
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Login'
          }
        }
      }
    }
  }
});