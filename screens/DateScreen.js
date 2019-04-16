import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';
// import CalendarPicker from 'react-native-calendar-picker';
import CalendarPicker from '../CalendarPicker';

export default class DateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:"2019-04-10",
      selectedStartDate: null,
    }
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const startDate = selectedStartDate ? `${days[new Date(selectedStartDate).getDay()]} ${months[new Date(selectedStartDate).getMonth()]} ${new Date(selectedStartDate).getDate()}` : '';
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginBottom: 'auto', paddingTop: 60}}>
          <Text>{this.props.screenProps.localeStore.title}</Text>
          <View style={{ paddingTop: 20}}>
            <Text>{this.props.screenProps.store.clinic}</Text>
          </View>
        </View>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <HeaderText>{this.props.screenProps.localeStore.selectDate }</HeaderText>
          <CalendarPicker
            onDateChange={this.onDateChange}
            selectedDayColor='#298bd9'
            selectedDayTextColor='white'
            gridShape='square'
            textStyle={{fontSize: 26}}
            previousTitle={this.props.screenProps.localeStore.previous}
            nextTitle={this.props.screenProps.localeStore.next}
            weekdays={this.props.screenProps.localeStore.weekdays}
            minDate={Date.now()}
          />
          <HeaderText bold="true">{ startDate }</HeaderText>
          { selectedStartDate ? (<Button
              title={this.props.screenProps.localeStore.confirm}
              onPress={this.nextPage}
              buttonStyle={{padding: 30, width: '100%' }}
              titleStyle={{fontSize: 32}}
          />) : null }
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
    this.props.navigation.navigate('Location');
  }
  nextPage() {
    this.props.screenProps.store.date = new Date(this.state.selectedStartDate);
    this.props.navigation.navigate('Time');
  }
}