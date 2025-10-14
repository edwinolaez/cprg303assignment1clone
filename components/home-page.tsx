import React from 'react';
import { Alert, Button, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomePage = () => {
  const showAlert = () => {
    Alert.alert('Alert', 'Alert button pressed!'  );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.icons}>
          <Text>📶🔋 </Text>
        </View>
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>YouTube</Text>
        </View>
        <View style={styles.tabs}>
          <Text>All</Text>
          <Text>Mixes</Text>
          <Text>Music</Text>
      
          <Text>🔍</Text>
        </View>
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
        <Text>🏠</Text>
        <Text>Shorts</Text>
        <Text>➕</Text>
        <Text>Subscriptions</Text>
        <Text>You</Text>
      </View>

      <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertButtonText}>Show Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage

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
  tabs: {flexDirection: 'row', justifyContent: 'space-around', flex: 1},
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
});