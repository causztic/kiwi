import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class ResultsScreen extends React.Component {
  date = new Date();
  state = {
    date: "April 01 2019",
    time: `${this.date.getHours() > 12 ? this.date.getHours() - 12 : this.date.getHours()}:${this.date.getMinutes() >= 10 ? this.date.getMinutes() : `0${this.date.getMinutes()}`}${this.date.getHours() >= 12 ? 'PM' : 'AM'}`
  };
  constructor(props) {
    super(props);
    this.previousPage = this.previousPage.bind(this);
  }
  getDay() {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][this.date.getDay() - 1];
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginBottom: 'auto', paddingTop: 60}}>
          <Text>{this.props.screenProps.localeStore.title}</Text>
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <View style={{ paddingBottom: 30 }}>
            <HeaderText>Shenton Medical (Changi)</HeaderText>
          </View>
          <HeaderText>{this.state.time}</HeaderText>
          <HeaderText>{this.state.date}</HeaderText>
          <HeaderText>{this.getDay()}</HeaderText>
          <View style={{ paddingTop: 30, width: '100%' }}>
            <Button
              title={this.props.screenProps.localeStore.howToGetThere}
              buttonStyle={{padding: 30}}
              titleStyle={{fontSize: 32}}
            />
          </View>
        </View>
        <View style={{paddingBottom: 30, width: '100%' }}>
          <Button
            title={this.props.screenProps.localeStore.previous}
            type="clear"
            onPress={this.previousPage}
          />
        </View>
      </View>
    );
  }
  previousPage() {
    this.props.navigation.navigate('Time');
  }
}