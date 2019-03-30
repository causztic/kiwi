import React from 'react';
import { View, Text } from 'react-native';

export default class ProblemScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.screenProps.localeStore.hello }</Text>
      </View>
    );
  }
}