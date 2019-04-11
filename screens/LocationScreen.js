import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class LocationScreen extends React.Component {
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
            <Text>{this.props.screenProps.store.date ? this.props.screenProps.store.date.toDateString() : null}</Text>
            <Text>{this.props.screenProps.store.time}</Text>
          </View>
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <View style={{paddingBottom: 30}}>
            <TouchableOpacity onPress={() => this.nextPage('AMK PolyClinic')}>
              <Image
                resizeMode="contain"
                style={{height: 100}}
                source={require("../images/polyclinic1.jpeg")}/>
              <HeaderText>{this.props.screenProps.localeStore.polyclinic1}</HeaderText>
              <HeaderText>20 {this.props.screenProps.localeStore.minutesAway}</HeaderText>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.nextPage('Healthway Medical Clinic')}>
              <Image
                resizeMode="contain"
                style={{height: 100}}
                source={require("../images/polyclinic2.jpg")}/>
              <HeaderText>{this.props.screenProps.localeStore.polyclinic2}</HeaderText>
              <HeaderText>25 {this.props.screenProps.localeStore.minutesAway}</HeaderText>
            </TouchableOpacity>
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
  nextPage(clinic) {
    this.props.screenProps.store.clinic = clinic;
    if (this.props.screenProps.store.meta === 'location')
      this.props.navigation.navigate('Date');
    else
      this.props.navigation.navigate('Results');
  }

  previousPage() {
    if (this.props.screenProps.store.meta === 'location')
      this.props.navigation.navigate('Meta');
    else
      this.props.navigation.navigate('Time');
  }
}