import React from 'react';
import { Text } from 'react-native';

export class HeaderText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bold } = this.props;
    return (
      <Text style={{fontSize: 36, fontWeight: bold ? "bold" : "normal"}}>{this.props.children}</Text>
    );
  }
}