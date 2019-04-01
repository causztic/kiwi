import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class ProblemScreen extends React.Component {
  constructor(props) {
    super(props);
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
            ["eye", "throat", "chest", "stomach", "others"].map(part =>
              <View key={part} style={{width: '50%', paddingBottom: 15, paddingTop: 15}}>
                <Button
                  title={this.props.screenProps.localeStore[part]}
                  color="black"
                  onPress={this.nextPage}
                  titleStyle={{fontSize: 32}}
                />
              </View>
            )
          }
        </View>
      </View>
    );
  }
  nextPage() {
    this.props.navigation.navigate('Location');
  }
}