import React from 'react';
import { Button, Image, Platform, StatusBar, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import BellIcon from './Icons/bellIcon';
import HomeIcon from './Icons/homeIcon';
import SearchIcon from './Icons/searchIcon';
import ShortsIcon from './Icons/shortsIcon';
import SubscriptionsIcon from './Icons/subscriptionsIcon';
import YoutubeLogo from './Icons/youtubeLogo';

const HomePage = () => {
 const showAlert = () => {
    Alert.alert('Alert', 'Alert button pressed!');}

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          {/* <Text style={styles.time}>9:41</Text>
        <View style={styles.icons}>
          <Text>📶🔋 </Text>
        </View> */}
        {/* <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>YouTube</Text>
        </View> */}
        <View style={styles.tabs}>
          <View style={styles.leftSection}><YoutubeLogo/></View>
          <View style={styles.rightSection}>
            <View style={styles.Icon}><Image style={styles.castIconStyle} source={require('../assets/images/CastIcon.png')} /></View>
          <View style={styles.Icon}><BellIcon/></View>
          <View style={styles.Icon}><SearchIcon/></View>
          </View>
        </View>
      </View>

      <View style={styles.filterRow}>
        {['All', 'Mixes', 'Music', 'Federal Bureau of'].map((text, index) => (
          <View key={index} style={styles.filterButton}>
            <Text style={[styles.filterText, index === 0 && {color:'white', backgroundColor:'black'}]}>{text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.adSection}>
        <Image source={require('../assets/images/disney.jpg')} style={styles.thumbnail} />
        <Text style={styles.adText}>Enjoy the Spirit of the Holidays at the Disneyland Resort with a Canada R...</Text>
        <Text style={styles.sponsored}>Sponsored. DisneyLand Resort</Text>
        <Text>Oct 5-Oct 17</Text>
        <View style={styles.buttons}>
          <Button title="Watch" onPress={() => {}} color= "#000" />
          <Button title="Learn More" onPress={() => {}} color= "#000" />
        </View>
      </View>

      <View style={styles.newsSection}>
        <Image source={require('../assets/images/newsbroadcast.jpg')} style={styles.newsThumbnail} />
        <Image source={require('../assets/images/newslogo.jpg')} style={styles.logoSmall} />
        <Text style={styles.newsTitle}>New reporting CONFIRMS accidentally posted DM to Randi or ...</Text>
        <Text>8:07</Text>
      </View>

      <View style={styles.bottomNav}>
       <View style={styles.tab}>
          <HomeIcon/>
          <Text style={styles.label}>Home</Text>
      </View>

      <View style={styles.tab}>
          <ShortsIcon/>
          <Text style={styles.label}>Shorts</Text>
      </View>

      <View style={styles.tab}>
          <View><Image style={styles.plusIcon} source={require('../assets/images/PlusIcon.png')} /> </View>
      </View>

      <View style={styles.tab}>
          <SubscriptionsIcon selected={true}/>
          <Text style={styles.label}>Subscriptions</Text>
      </View>

      <View style={styles.tab}>
          <Image source={require("../assets/images/MyProfile.png")}
            style={styles.ProfileIcon} />
          <Text style={styles.label}>You</Text>
      </View>

      <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertButtonText}>Show Alert</Text>
      </TouchableOpacity>
    </View> 
    </View>
  );
}
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight || 0 }),
  },
  header: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  time: {fontSize: 16},
  icons: {flexDirection: 'row'},
  logoPlaceholder: {width: 40, height: 40, backgroundColor:'#FF0000',justifyContent: 'center',  alignItems: 'center', marginRight: 10},
  logoText: {color: '#FFF', fontWeight: 'bold', fontSize: 12},
  tabs: {flexDirection: 'row', justifyContent: 'space-between', flex: 1},
  adSection: {padding: 10, alignItems: 'center'},
  thumbnail: {width: '100%', height: 200},
  adText: {fontSize: 16, textAlign: 'center'},
  sponsored: {color: '#888'},
  buttons: {flexDirection: 'row', justifyContent: 'space-around', width: '100%'},
  newsSection: {padding: 10},
  newsThumbnail: {width: '100%', height: 150},
  logoSmall: {width: 50, height: 30},
  newsTitle: {fontSize: 16, fontWeight: 'bold'},
  bottomNav: {flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1, borderTopColor: '#CCC',position: 'absolute', bottom: 50, width: '100%'},
  alertButton: {alignItems: 'center', marginVertical:10, backgroundColor: '#FF0000', padding: 10},
  alertButtonText: {color: '#FFF',fontSize: 16, fontWeight: 'bold'},
  leftSection: {height: 30,width:30,resizeMode:'contain',marginHorizontal:2,marginTop:3,flexDirection:'row',alignItems:'center'},
  rightSection: {flexDirection:'row',alignItems:'center'},
  Icon: {marginHorizontal: 5, height: 25, width: 25, resizeMode: 'contain', marginTop: 2},
  castIconStyle: {width: 20, height: 20, resizeMode: 'contain'},
  filterRow:{flexDirection:'row',paddingVertical: 10, paddingHorizontal:10},
  filterButton:{marginRight:10},
  filterText:{fontSize:14, paddingVertical:6, paddingHorizontal:14, borderRadius: 10, backgroundColor:'#f2f2f2',fontWeight:'bold'},
  tab:{alignItems:'center', marginTop: 8, marginBottom: 8},
  plusIcon:{width:40, height:50, resizeMode:'contain',borderRadius:100},
  label:{fontSize:12, marginTop:2,color:"black"},
  ProfileIcon:{width:30, height:30, resizeMode:'contain', borderRadius:20},
});