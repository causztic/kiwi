import React from 'react';
import { View, Text, Image } from 'react-native';
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
          <Image
            resizeMode="contain"
            style={{height: 100}}
            source={require("../images/polyclinic1.jpeg")}/>
          <HeaderText>20 minutes away</HeaderText>
          <View style={{ width: '100%', marginBottom: 30 }}>
            <Button
              title="AMK Polyclinic"
              onPress={() => this.nextPage('AMK PolyClinic')}
              titleStyle={{fontSize: 32}}
            />
          </View>
          <Image
            resizeMode="contain"
            style={{height: 100}}
            source={require("../images/polyclinic2.jpg")}/>
          <HeaderText>25 minutes away</HeaderText>
          <View style={{ width: '100%', marginBottom: 30 }}>
            <Button
              title="Healthway Medical Clinic"
              onPress={() => this.nextPage('Healthway Medical Clinic')}
              titleStyle={{fontSize: 32}}
            />
          </View>
          <Image
            resizeMode="contain"
            style={{height: 100}}
            source={require("../images/polyclinic3.jpg")}/>
          <HeaderText>30 minutes away</HeaderText>
          <View style={{ width: '100%', marginBottom: 30 }}>
            <Button
              title="Toa Payoh Polyclinic"
              onPress={() => this.nextPage('Toa Payoh Polyclinic')}
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
  nextPage(clinic) {
    this.props.screenProps.store.clinic = clinic;
    this.props.navigation.navigate('Date');
  }

  previousPage() {
    this.props.navigation.navigate('Problem');
  }
}