import React from 'react';
import { View, Text, Picker, StyleSheet, Image,Platform,ScrollView,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderText } from '../HeaderText';

export default class TimeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.changeLocale = this.changeLocale.bind(this);
    this.state={firstPage:1};
    this._leftButton = this._leftButton.bind(this);
    this._rightButton = this._rightButton.bind(this);
  }
  render() {
    const { firstPage } = this.state;

    return (
      <View style={styles.bannerContainer}>
        <View>
          <HeaderText style={{fontSize:30,alignContent:'center'}}>{this.props.screenProps.store.clinic}</HeaderText>
        </View>

        <View style={styles.container}>

          {firstPage!=1 && <TouchableOpacity onPress={this._leftButton} style={{flex:0.15,backgroundColor:'#298bd9'}}>
            <Text style={{textAlign:'center',fontSize:50,color:'white'}}>&#8592;</Text>
          </TouchableOpacity>}

          {firstPage==1 && <TouchableOpacity style={{flex:0.15,backgroundColor:'#000000'}}>
          </TouchableOpacity>}

          {firstPage==1 && <Text style={{flex:0.8, textAlign:'center',fontSize:36,}}>Walk to Bus Stop</Text>}
          {firstPage==2 && <Text style={{flex:0.8, textAlign:'center',fontSize:36,}}>Board Bus</Text>}
          {firstPage==3 && <Text style={{flex:0.8, textAlign:'center',fontSize:36,}}>Alight from Bus</Text>}
          {firstPage==4 && <Text style={{flex:0.8, textAlign:'center',fontSize:36,}}>Walk to Clinic</Text>}


          {firstPage!=4 && <TouchableOpacity onPress={this._rightButton} style={{flex:0.15,backgroundColor:'#298bd9'}}>
            <Text style={{textAlign:'center',fontSize:50,color:'white'}}>&#8594;</Text>
          </TouchableOpacity>}
          {firstPage==4 && <TouchableOpacity style={{flex:0.15,backgroundColor:'#000000'}}>
          </TouchableOpacity>}

        </View>

        <View style={styles.container}>
          <View style={{flex:0.2, alignItems:'flex-start'}}>
            {firstPage==1 && <Image source={require('../assets/images/steps.png')}style={styles.image}/>}
            {firstPage==2 && <Image source={require('../assets/images/steps2.png')}style={styles.image}/>}
            {firstPage==3 && <Image source={require('../assets/images/steps3.png')}style={styles.image}/>}
            {firstPage==4 && <Image source={require('../assets/images/steps4.png')}style={styles.image}/>}
          </View>
          <View style={{flex:0.8}}>{firstPage==1 && <Image source={require('../assets/images/pic3.png')}style={styles.image2}/>}
            {firstPage==2 && <Image source={require('../assets/images/Buses.png')}style={styles.image2}/>}
            {firstPage==3 && <Image source={require('../assets/images/pic4.png')}style={styles.image2}/>}
            {firstPage==4 && <Image source={require('../assets/images/pic5.png')}style={styles.image2}/>}
          </View>
        </View>

        <View style={{paddingTop:60, justifyContent:'space-between', width: '100%' }}>
          <Button
          title={this.props.screenProps.localeStore.previous}
          type="clear"
          onPress={this.previousPage}
          />
        </View>
      </View>);}

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
        this.setState({firstPage:false});
      }
      _rightButton(){
        this.setState({firstPage:this.state.firstPage+1});
      }
      _leftButton(){
        this.setState({firstPage:this.state.firstPage-1});
      }
    }

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  stepsContainer:{
    flex:1,
  },
  button: {
    flex:0.1,
    height: 100,
    width: 100,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  banner: {
    width: 440,
    height: 80,
  },
  bannerImage: {
    width: 440,
    height: 80,
  },
  image: {
    resizeMode: 'contain',
    height:380,

  },
  image2: {
    resizeMode: 'stretch',
    height:420,
  },
})
