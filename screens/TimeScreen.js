import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class TimeScreen extends React.Component {
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
          <View style={{ paddingTop: 20}}>
            <Text>{this.props.screenProps.store.clinic}</Text>
            <Text>{date}</Text>
          </View>
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <HeaderText>{this.props.screenProps.localeStore.selectTime }</HeaderText>
          <View style={{flexDirection: "row", flexWrap: "wrap"}}>
            {
              ['9:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '4:00 PM'].map(time => (
                <View key={time} style={{width: '100%', paddingBottom: 15, paddingTop: 15}}>
                  <Button
                    onPress={() => this.nextPage(time)}
                    title={time}
                    buttonStyle={{padding: 15}}
                    titleStyle={{fontSize: 32}}
                  />
                </View>
              )
            )}
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
    this.props.navigation.navigate('Date');
  }
  nextPage(time) {
    this.props.screenProps.store.time = time;
    this.props.navigation.navigate('Results');
  }
}