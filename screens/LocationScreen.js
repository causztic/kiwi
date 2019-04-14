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
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <HeaderText>{this.props.screenProps.localeStore.selectLocation }</HeaderText>
          <View style={{paddingBottom: 30}}>
            <TouchableOpacity onPress={() => this.nextPage('AMK PolyClinic')}>
              <Image
                resizeMode="stretch"
                style={{height: 100, width: 400}}
                source={require("../assets/images/polyclinic1.jpeg")}/>
              <View style={{backgroundColor: '#298bd9'}}>
                <HeaderText white="true">{this.props.screenProps.localeStore.polyclinic1}</HeaderText>
              </View>
              <HeaderText>20 {this.props.screenProps.localeStore.minutesAway}</HeaderText>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.nextPage('Healthway Medical Clinic')}>
              <Image
                resizeMode="stretch"
                style={{height: 100, width: 400}}
                source={require("../assets/images/polyclinic2.jpg")}/>
              <View style={{backgroundColor: '#298bd9'}}>
                <HeaderText white="true">{this.props.screenProps.localeStore.polyclinic2}</HeaderText>
              </View>
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
    this.props.navigation.navigate('Date');
  }

  previousPage() {
    this.props.navigation.navigate('Problem');
  }
}