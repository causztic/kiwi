import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { Header } from 'react-native-elements';
import { HeaderText } from './HeaderText';

export default class App extends React.Component {
  render() {
    return (
      <View style={{styles}}>
        <View style={{alignItems: 'center', paddingTop: 30}}>
          <HeaderText>MAKE AN APPOINTMENT</HeaderText>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '50%', height: 50, backgroundColor: 'powderblue'}}>
            <Button
              onPress={changeLocale}
              title="English"
              color="black"
              accessibilityLabel="Change to English"
            />
          </View>
          <View style={{width: '50%', height: 50, backgroundColor: 'powderblue'}}>
            <Button
              onPress={changeLocale}
              title="中文"
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