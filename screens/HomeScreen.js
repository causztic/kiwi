import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderText } from '../HeaderText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocale = this.changeLocale.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 'auto', paddingTop: 60}}>
          <Text>Healthcare Appointment</Text>
          <Text>健康预约</Text>
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <HeaderText>Choose Language</HeaderText>
          <HeaderText>语言选择</HeaderText>
            <View style={{width: '100%', paddingBottom: 30, paddingTop: 15}}>
              <Button
                onPress={() => this.changeLocale('en')}
                title="English"
                buttonStyle={{padding: 30}}
                titleStyle={{fontSize: 32}}
                accessibilityLabel="Change to English"
              />
            </View>
            <View style={{width: '100%'}}>
              <Button
                onPress={() => this.changeLocale('cn')}
                title="中文"
                buttonStyle={{padding: 30}}
                titleStyle={{fontSize: 32}}
                accessibilityLabel="换去中文"
              />
            </View>
          </View>
      </View>
    );
  }
  changeLocale(key) {
    this.props.screenProps.changeLocale(key);
    this.props.navigation.navigate('Problem');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})