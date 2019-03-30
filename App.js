import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, ProblemScreen } from './screens';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Problem: ProblemScreen,
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    header: null
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const localizedStrings = {
      cn: { hello: "哈咯" },
      en: { hello: "hello" },
    }
    this.localeStore = new Proxy({
      locale: 'en',
    }, {
      get(target, property) {
        return localizedStrings[target.locale][property]
      }
    })
  }
  changeLocale(key) {
    this.localeStore.locale = key;
  }
  render() {
    return (
      <AppContainer
        screenProps={{
          localeStore: this.localeStore,
          changeLocale: this.changeLocale
        }}
      />
    );
  }
}