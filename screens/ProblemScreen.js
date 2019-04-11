import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class ProblemScreen extends React.Component {
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
          <HeaderText>{this.props.screenProps.localeStore.problem }</HeaderText>
          {
            ["head", "throat", "stomach", "muscle", "others"].map(part =>
              <View style={{ paddingBottom: 15, width: '100%' }} key={part}>
                <Button
                  title={this.props.screenProps.localeStore[part]}
                  onPress={this.nextPage}
                  buttonStyle={{padding: 30}}
                  titleStyle={{fontSize: 32}}
                />
              </View>
            )
          }
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
    this.props.navigation.navigate('Home');
  }
  nextPage() {
    this.props.navigation.navigate('Date');
  }
}