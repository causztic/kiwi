import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class MapScreen extends React.Component {
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
          <HeaderText>{this.props.screenProps.localeStore.selectLocation }</HeaderText>
          <Button
            title={this.props.screenProps.localeStore.next}
            color="black"
            onPress={this.nextPage}
            titleStyle={{fontSize: 32}}
          />
        </View>
      </View>
    );
  }
  nextPage() {
    this.props.navigation.navigate('Bus');
  }
}