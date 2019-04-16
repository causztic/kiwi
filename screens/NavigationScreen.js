import React from 'react';
import { View, Text, Picker, StyleSheet, Image,Platform,ScrollView,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';
import { Header } from 'react-navigation';

export default class TimeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.changeLocale = this.changeLocale.bind(this);
    this.state={ pageNumber: 0 };
    this._leftButton = this._leftButton.bind(this);
    this._rightButton = this._rightButton.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }
  render() {
    const { pageNumber } = this.state;
    let backButton, forwardButton;
    const titles = ["Walk to Bus Stop", "Board Bus", "Alight from Bus", "Walk to Clinic"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = `${days[this.props.screenProps.store.date.getDay()]} ${months[this.props.screenProps.store.date.getMonth()]} ${this.props.screenProps.store.date.getDate()}`;
    if (pageNumber === 0) {
      backButton = <View style={{flex: 0.15 }}/>
    } else {
      backButton =
        <TouchableOpacity onPress={this._leftButton} style={{flex:0.15,backgroundColor:'#298bd9'}}>
          <Text style={{textAlign:'center',fontSize:50,color:'white'}}>&#8592;</Text>
        </TouchableOpacity>;
    }

    if (pageNumber === 3) {
      forwardButton = <View style={{flex: 0.15 }}/>
    } else {
      forwardButton =
        <TouchableOpacity onPress={this._rightButton} style={{flex:0.15,backgroundColor:'#298bd9'}}>
          <Text style={{textAlign:'center',fontSize:50,color:'white'}}>&#8594;</Text>
        </TouchableOpacity>
    }

    return (
      <View style={styles.bannerContainer}>
        <View style={{marginBottom: 'auto', alignItems: 'center', width: '100%'}}>
          <HeaderText>{this.props.screenProps.store.clinic}</HeaderText>
          <HeaderText>{this.props.screenProps.store.time}</HeaderText>
        </View>
        <View style={styles.container}>
          { backButton }
          <Text style={{ flex:0.8, textAlign:'center',fontSize:36 }}>{titles[pageNumber]}</Text>
          { forwardButton }
        </View>

        <View style={styles.stepsContainer}>
          <View style={ { flex:0.2, alignItems:'center', flexDirection: 'column'} }>
            <Image source={require('../assets/images/walk.png')} style={this.iconStyle(0)} />
            <Image source={require('../assets/images/line.png')} />
            <Image source={require('../assets/images/bus.png')} style={this.iconStyle(1)} />
            <Image source={require('../assets/images/line.png')} />
            <Image source={require('../assets/images/bus.png')} style={this.iconStyle(2)} />
            <Image source={require('../assets/images/line.png')} />
            <Image source={require('../assets/images/walk.png')} style={this.iconStyle(3)} />
          </View>
          <View style={{flex:0.8, alignItems: 'flex-start', flexDirection: 'column'}}>
            { pageNumber==0 &&
              <>
                <Image source={require('../assets/images/step1.png')}style={styles.image}/>
                <HeaderText>Go to this bus stop near Yio Chu Kang Blk 300</HeaderText>
              </>
            }
            {pageNumber==1 &&
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <HeaderText>Board bus 57 for 4 stops</HeaderText>
              </View>
            }
            {pageNumber==2 &&
              <>
                <Image source={require('../assets/images/step3-1.png')}style={styles.image}/>
                <Image source={require('../assets/images/step3-2.png')}style={styles.image}/>
                <HeaderText>Alight at stop in front of Courts</HeaderText>
              </>
            }
            {pageNumber==3 &&
              <>
                <Image source={require('../assets/images/step4-1.png')}style={styles.image}/>
                <Image source={require('../assets/images/step4-2.png')}style={styles.image}/>
                <HeaderText>Walk towards the building circled in red</HeaderText>
              </>
            }
          </View>
        </View>
        <View style={{paddingTop:45, justifyContent:'space-between', width: '100%' }}>
          <Button
            title={this.props.screenProps.localeStore.previous}
            type="clear"
            onPress={this.previousPage}
          />
        </View>
      </View>);
  }
  iconStyle(index) {
    let style = {
      resizeMode: 'contain',
      height: 60,
      marginTop: 0,
      marginBottom: 0,
    };

    if (index !== this.state.pageNumber) {
      style.opacity = 0.25;
    }

    return style;
  }
  changeLocale(key) {
    this.props.screenProps.changeLocale(key);
    this.props.navigation.navigate('Problem');
  }
  previousPage() {
    this.props.navigation.navigate('Results');
  }
  nextPage() {
    this.props.navigation.navigate('Navigation');
  }
  handleButtonVisibility(){
    this.setState({pageNumber:false});
  }
  _rightButton(){
    this.setState({ pageNumber:this.state.pageNumber + 1 });
  }
  _leftButton(){
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  }
}

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  stepsContainer:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 'auto',
    height: '65%',
  },
  image: {
    width: '100%',
  },
})
