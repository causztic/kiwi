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
      cn: {
        title: "健康预约",
        problem: "哪里痛?",
        eye: "眼睛",
        throat: "喉咙",
        chest: "胸口",
        stomach: "肚子",
        others: "其他"
      },
      en: {
        title: "Healthcare Appointment",
        problem: "Where Pain?",
        eye: "Eye",
        throat: "Throat",
        chest: "Chest",
        stomach: "Stomach",
        others: "Others"
      },
    }
    this.localeStore = new Proxy({
      locale: 'en',
    }, {
      get(target, property) {
        if (localizedStrings[target.locale][property]) {
          return localizedStrings[target.locale][property]
        } else {
            if (target.locale !== 'en' && localizedStrings['en'][property]) {
              return localizedStrings['en'][property]
            } else {
              return property
            }
          }
        }
      }
    )
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