import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, ProblemScreen, LocationScreen, TimeScreen, DateScreen, ResultsScreen } from './screens';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Problem: ProblemScreen,
  Time: TimeScreen,
  Date: DateScreen,
  Location: LocationScreen,
  Results: ResultsScreen,
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
        others: "其他",
        selectLocation: "去哪个诊所？",
        selectTime: "几点去？",
        selectDate: "几时去？",
        next: "下一页",
        howToGetThere: "怎样去？"
      },
      en: {
        title: "Healthcare Appointment",
        problem: "Where Pain?",
        eye: "Eye",
        throat: "Throat",
        chest: "Chest",
        stomach: "Stomach",
        others: "Others",
        selectLocation: "Which Clinic?",
        selectTime: "What Time Go?",
        selectDate: "Which Date Go?",
        next: "next",
        howToGetThere: "How To Get There?"
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