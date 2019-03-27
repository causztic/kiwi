import React from 'react';
import { Text } from 'react-native';

export class HeaderText extends React.Component {
  render() {
    return (
      <Text style={{fontSize: 26}}>{this.props.children}</Text>
    );
  }
}