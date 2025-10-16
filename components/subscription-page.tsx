import React from 'react';
import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import BellIcon from './Icons/bellIcon';
import HomeIcon from './Icons/homeIcon';
import SearchIcon from './Icons/searchIcon';
import ShortsIcon from './Icons/shortsIcon';
import SubscriptionsIcon from './Icons/subscriptionsIcon';
import YoutubeLogo from './Icons/youtubeLogo';




export default function subscriptionPage() {


  const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF',
      paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight || 0 }),
    },
  ProfileIcon: {
    borderRadius: 20,
    width: 30, 
    height: 30,
    resizeMode: 'contain',
  },
  castIconStyle: { 
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
    header: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
    tabs: {flexDirection: 'row', justifyContent: 'space-around', flex: 1},
    Icon:{
      height: 30,
      width: 30,
      resizeMode: 'contain',
      marginHorizontal: 8,
    },
    leftSection:{ 
      height: 30,
      width: 30,
      resizeMode: 'contain',
     
      flexDirection: "row",
      alignItems: "center",
    },
    rightSection:{ 
       flexDirection: "row",
        alignItems: "center",
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    label: {
      fontSize: 12,
      marginTop: 2,
      color: "black",
    },
    tab: {
      alignItems: "center",
      marginTop: 8,
      marginBottom: 8
    },
    plusIcon: {
      height: 50,
      width: 40,
      resizeMode: 'contain',
    },
    video:{
      height: 200,
      width: 350,
      resizeMode: 'contain', 
      borderRadius:'8%',
    },

    profileContainer: {
      marginTop: 10,
      marginLeft: 10,
    },
    profileItem: {
      marginRight: 12,
      alignItems: "center",
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },


});

  const stories = [
      { id: "1", name: "Shawn Mendes", profile: require("../assets/images/profile1.jpg") },
      { id: "2", name: "Sportsnet", profile: require("../assets/images/profile2.jpg") },
      { id: "3", name: "First We Feast", profile: require("../assets/images/profile3.jpg") },
      { id: "4", name: "Kouki", profile: require("../assets/images/profile4.jpg") },
      { id: "5", name: "Katy Perry", profile: require("../assets/images/profile5.jpg") },
      { id: "6", name: "Taylor Swift", profile: require("../assets/images/profile6.jpg") },
      { id: "7", name: "Halsey", profile: require("../assets/images/profile7.jpg") },
      { id: "8", name: "Maroon 5", profile: require("../assets/images/profile8.jpg") },
    ];

  const videos = [
    {
      id: "1",
      thumbnail: require("../assets/images/video1.jpg"),
      profile: require("../assets/images/profile1.jpg"),
      title: "Shawn Mendes - Treat You Better",
      channel: "Shawn Mendes",
      views: "2.6B views",
      time: "9 years ago",
      duration: "4:17",
    },
    {
      id: "2",
      thumbnail: require("../assets/images/video2.jpg"),
      profile: require("../assets/images/profile2.jpg"),
      title: "What Are The Vibes In Vancouver | Real Kyper & Bourne",
      channel: "Sportsnet",
      views: "120K views",
      time: "1 day ago",
      duration: "1:39:13",
    },
    {
      id: "3",
      thumbnail: require("../assets/images/video3.jpg"),
      profile: require("../assets/images/profile3.jpg"),
      title: "Luka Dončić Gets Flagrant Fouled By Spicy Wings | Hot Ones",
      channel: "First We Feast",
      views: "281K views",
      time: "7 hours ago",
      duration: "18:10",
    },
    
  ];


    
    return (
    <View  style={styles.container}>
      <View style={styles.header}>

            <View style={styles.tabs}>
                  <View style={styles.leftSection}><YoutubeLogo /></View>
                  <View style={styles.rightSection}>
                    <View style={styles.Icon}><Image style={styles.castIconStyle}
                      source={require("../assets/images/CastIcon.png")}
                    /></View>
                    <View style={styles.Icon}><BellIcon /></View>
                    <View style={styles.Icon}><SearchIcon /></View>
                  </View>
                  
              </View>
            </View>

            {/* Main Content */}
            {/* ---------- profile ROW ---------- */}
            <View style={styles.profileContainer}>
               <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={stories}
                  renderItem={({ item }) => {
                    // Trim the name if it’s longer than 5 characters
                    const displayName =
                      item.name.length > 5 ? item.name.slice(0, 5) + "..." : item.name;

                    return (
                      <View style={styles.profileItem}>
                        <Image source={item.profile} style={styles.profileImage} />
                        <Text >{displayName}</Text>
                      </View>
                    );
                  }}
                />
            </View>



            <View style={styles.bottomNav}>
              {/* Home */}
              <View style={styles.tab}>
                <HomeIcon />
                <Text style={styles.label}>Home</Text>
              </View>

              {/* Shorts */}
              <View style={styles.tab}>
                <ShortsIcon />
                <Text style={styles.label}>Shorts</Text>
              </View>

              {/* Add (+) */}
              <View style={styles.tab}>
                  <div ><Image style={styles.plusIcon}
                    source={require("../assets/images/PlusIcon.png")}
                  /></div>   
              </View>

              {/* Subscriptions */}
              <View style={styles.tab}>
                <SubscriptionsIcon selected={true} />
                <Text style={styles.label}>Subscriptions</Text>
              </View>

              {/* You / Profile */}
              <View style={styles.tab}>
                <Image
                  source={require("../assets/images/MyProfile.png")}
                  style={styles.ProfileIcon}
                />
                <Text style={styles.label}>You</Text>
              </View>
            </View>
      
      <YoutubeLogo />
      <BellIcon />

      <HomeIcon selected={true}/>

      <SubscriptionsIcon selected={false} />
      <SearchIcon />
      <div ><Image style={styles.ProfileIcon}
        source={require("../assets/images/MyProfile.png")}
      /></div>
      <div ><Image style={styles.castIconStyle}
        source={require("../assets/images/CastIcon.png")}
      /></div>
      <div ><Image style={styles.ProfileIcon}
        source={require("../assets/images/PlusIcon.png")}
      /></div>

      <div ><Image style={styles.ProfileIcon}
        source={require("../assets/images/profile1.jpg")}
      /></div>
      <div ><Image style={styles.video}
        source={require("../assets/images/video1.jpg")}
      /></div>

  </View>
    
  );
  
}
