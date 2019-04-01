import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { HeaderText } from './HeaderText';

export default class App extends React.Component {
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
            <View style={{width: '50%', paddingBottom: 15, paddingTop: 15}}>
              <Button
                onPress={changeLocale}
                title="English"
                color="black"
                titleStyle={{fontSize: 32}}
                accessibilityLabel="Change to English"
              />
            </View>
            <View style={{width: '50%'}}>
              <Button
                onPress={changeLocale}
                title="中文"
                titleStyle={{fontSize: 32}}
                accessibilityLabel="换去中文"
              />
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const changeLocale = () => {

}
