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
    this.state={firstPage:true};
  }
  render() {
    const { firstPage } = this.state;

    return (
      <View style={styles.bannerContainer}>
        <View>
          <HeaderText style={{fontSize:30,alignContent:'center'}}>{this.props.screenProps.store.clinic}</HeaderText>
        </View>

        <View style={styles.container}>
        {!firstPage && <TouchableOpacity style={{flex:0.1,backgroundColor:'#298bd9'}}>
          <Text style={{textAlign:'center',fontSize:34}}>&#8592;</Text>
        </TouchableOpacity>}
        <Text style={{flex:0.8, textAlign:'center',fontSize:25,}}>Walk to Bus Stop</Text>
        <TouchableOpacity style={{flex:0.1,backgroundColor:'#298bd9'}}>
          <Text style={{textAlign:'center',fontSize:34}}>&#8594;</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={{flex:0.2, alignItems:'flex-start'}}>
            <Image
              source={require('../assets/images/steps.png')}style={styles.image}
              />
          </View>
          <View style={{flex:0.8}}>
          <Image
            source={require('../assets/images/pic3.png')}style={styles.image2}
            />
          </View>
        </View>

      <View style={{paddingTop:100, justifyContent:'space-between', width: '100%' }}>
        <Button
        title={this.props.screenProps.localeStore.previous}
        type="clear"
        onPress={this.previousPage}
        />
      </View>
    </View>
    );
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
      this.setState({firstPage:false});
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
