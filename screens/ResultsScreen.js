import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }
  render() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = `${days[this.props.screenProps.store.date.getDay()]} ${months[this.props.screenProps.store.date.getMonth()]} ${this.props.screenProps.store.date.getDate()}`;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginBottom: 'auto', paddingTop: 60}}>
          <Text>{this.props.screenProps.localeStore.title}</Text>
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <View style={{ paddingBottom: 30 }}>
            <HeaderText>{this.props.screenProps.store.clinic}</HeaderText>
          </View>
          <HeaderText>{this.props.screenProps.store.time}</HeaderText>
          <HeaderText>{date}</HeaderText>
          <View style={{ paddingTop: 30, width: '100%' }}>
            <Button
              title={this.props.screenProps.localeStore.howToGetThere}
              buttonStyle={{padding: 30}}
              titleStyle={{fontSize: 32}}
              onPress={this.nextPage}
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
  nextPage() {
    this.props.navigation.navigate('Navigation');
}
}