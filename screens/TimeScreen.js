import React from 'react';
import { View, Text, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class TimeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginBottom: 'auto', paddingTop: 60}}>
          <Text>{this.props.screenProps.localeStore.title}</Text>
          <View style={{ paddingTop: 20}}>
            <Text>Shenton Medical (Changi)</Text>
            <Text>1 April 2019</Text>
          </View>
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <HeaderText>{this.props.screenProps.localeStore.selectTime }</HeaderText>
          <Button
            title={this.props.screenProps.localeStore.next}
            color="black"
            onPress={this.nextPage}
            titleStyle={{fontSize: 32}}
          />
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
  nextPage() {
    this.props.navigation.navigate('Results');
  }
}