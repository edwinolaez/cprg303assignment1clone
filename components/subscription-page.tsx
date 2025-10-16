import React from 'react';
import { Image, Platform, StatusBar, StyleSheet, View } from 'react-native';
import BellIcon from './Icons/bellIcon';
import HomeIcon from './Icons/homeIcon';
import SearchIcon from './Icons/searchIcon';
import SubscriptionsIcon from './Icons/subscriptionsIcon';
import YoutubeLogo from './Icons/youtubeLogo';




export default function subscriptionPage() {


  const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF',
      paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight || 0 }),
    },
  img: {
    borderRadius: 20,
    width: 40, 
    height: 40
  },
  castIconStyle: { 
    height: 30,
    width: 30,
    resizeMode: 'contain',
  }
});
  return (
    <View  style={styles.container}>
      
      <YoutubeLogo />
      <BellIcon />

      <HomeIcon />

      <SubscriptionsIcon selected={true} />
      <SearchIcon />
      <div ><Image style={styles.img}
        source={require("../assets/images/MyProfile.png")}
      /></div>
      <div ><Image style={styles.castIconStyle}
        source={require("../assets/images/CastIcon.png")}
      /></div>
      <div ><Image style={styles.img}
        source={require("../assets/images/PlusIcon.png")}
      /></div>

  </View>
    
  );
  
}
