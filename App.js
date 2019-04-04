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
        selectLocation: "去哪个诊所？",
        selectTime: "几点去？",
        selectDate: "几时去？",
        next: "下一页",
        previous: "前一页",
        howToGetThere: "怎样去？",

        head: "头",
        eyes: "眼睛",
        ears: "耳朵",
        nose: "鼻子",
        teeth: "牙齿",

        throat: "喉咙",
        back: "背后",
        chest: "胸口",
        stomach: "肚子",

        calves: "膝盖",
        legs: "脚",
        others: "其他地方",

        body: "身体",
        muscle: "肌肉"
      },
      en: {
        title: "Healthcare Appointment",
        problem: "Where Pain?",
        selectLocation: "Which Clinic?",
        selectTime: "What Time Go?",
        selectDate: "Which Date Go?",
        next: "Next Page",
        previous: "Previous Page",
        howToGetThere: "How To Get There?",

        head: "Head",
        eyes: "Eye",
        ears: "Ear",
        nose: "Nose",
        teeth: "Teeth",

        throat: "Throat",
        back: "Back",
        chest: "Chest",
        stomach: "Stomach",

        calves: "Calves",
        legs: "Legs",
        others: "Other Parts",

        body: "Body",
        muscle: "Muscle"
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