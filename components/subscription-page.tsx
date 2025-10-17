import React from 'react';
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import BellIcon from './Icons/bellIcon';
import DotsIcon from './Icons/dots';
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
      paddingTop: Platform.select({ ios: 0, android: 0 }),
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 10,           
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
    tabs: { flexDirection: 'row', justifyContent: 'space-between', flex: 1},
    Icon:{
      height: 30,
      width: 30,
      resizeMode: 'contain',
      marginHorizontal: 5,
      marginTop: 5
    },
    leftSection:{ 
      height: 30,
      width: 30,
      resizeMode: 'contain',
      marginHorizontal: 2,
      marginTop: 3,
     
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
      borderTopWidth: 1,
      borderTopColor: '#ddd',
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
      borderRadius:100, 
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
      marginBottom: 5,
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
    filterRow: {
      flexDirection: "row",
      paddingVertical: 10,
      paddingHorizontal: 10,

    },
    filterButton: {
      marginRight: 10,
    },
    filterText: {
      fontSize: 14,
      paddingVertical: 6,
      paddingHorizontal: 14,
      borderRadius: 10,
      backgroundColor: "#f2f2f2",
      fontWeight: "bold",
    },
    videoCard: {
      marginBottom: 15,
    },
    thumbnail: {
      width: "100%",
      height: 230,
      // borderRadius: 10,
    },
    durationTag: {
      position: "absolute",
      bottom: 6,
      right: 6,
      backgroundColor: "rgba(0,0,0,0.8)",
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 4,
    },
    durationText: {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
    },
    videoInfo: {
      flexDirection: "row",
      padding: 10,
    },
    channelIcon: {
      width: 36,
      height: 36,
      borderRadius: 18,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
    },
    titleHorizontal: {
      fontSize: 14,
      fontWeight: "bold",
      color: "black",
    },
    subtitle: {
      fontSize: 12,
      color: "gray",
      marginTop: 1,
    },
    videoCardHorizontal: {
      marginLeft: 15,
      marginBottom: 10,
      marginTop: 10,
      width: 260,
      
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 15,
      
    },
    thumbnailHorizontal: {
      width: "100%",
      height: 145,
      borderRadius: 10,
    },
    dotsStyle:{ 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    rightBar: {
      position: 'absolute',
      right: 0,        
      top: 0,          
      bottom: 0,       
      width: 40,       
      backgroundColor: 'white', 
    }



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
      title: "The Vibes In Vancouver | Real Kyper & Bourne",
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
    // Top Nav
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
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
                <View style={styles.rightBar}><Text style={{fontSize: 13, textAlign: 'center', color: 'blue', fontWeight: 'bold', marginTop: 23}}>All</Text></View>
              </View>

              {/* ---------- FILTER BUTTONS ---------- */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.filterRow}>
                  {["All", "Today", "Videos", "Shorts", "Live", "Podcasts"].map((text, index) => (
                    <View key={index} style={styles.filterButton}>
                      <Text
                        style={[
                          styles.filterText,
                          index === 0 && { color: "white", backgroundColor: "black" },
                        ]}
                      >
                        {text}
                      </Text>
                    </View>
                  ))}
                </View>
              </ScrollView>
              

              {/* ---------- VIDEO LIST ---------- */}
              {/* Horizontal */}
              <Text style={styles.sectionTitle}>Most relevant</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {videos.map((item) => (
                <View key={item.id} style={styles.videoCardHorizontal}>
                  <View>
                    <Image source={item.thumbnail} style={styles.thumbnailHorizontal} />
                    <View style={styles.durationTag}>
                      <Text style={styles.durationText}>{item.duration}</Text>
                    </View>
                  </View>

                  <View style={styles.videoInfo}>
                    <View style={styles.textContainer}>
                      <View style={styles.dotsStyle}>
                        <Text style={styles.titleHorizontal} numberOfLines={2}>
                          {item.title}
                        </Text>
                        <View style={{marginLeft: 10, width: 10, marginTop: 3}}>
                          <DotsIcon />
                        </View>
                        
                      </View>
                      
                      <Text style={styles.subtitle}>
                        {item.channel}
                      </Text>
                      <Text style={styles.subtitle}>
                        {item.views} • {item.time}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}

              {/* Vertical */}
              </ScrollView>
              {videos.slice().reverse().map((item) => (
                <View key={item.id} style={styles.videoCard}>
                  <View>
                    <Image source={item.thumbnail} style={styles.thumbnail} />
                    <View style={styles.durationTag}>
                      <Text style={styles.durationText}>{item.duration}</Text>
                    </View>
                  </View>

                  <View style={styles.videoInfo}>
                    <Image source={item.profile} style={styles.channelIcon} />
                    <View style={styles.textContainer}>
                      <View style={styles.dotsStyle}>
                        <Text style={styles.title} numberOfLines={2}>
                          {item.title}
                        </Text>
                        <View style={{marginLeft: 10, marginTop: 5}}>
                          <DotsIcon />
                        </View>
                        
                      </View>
                      
                      <Text style={styles.subtitle}>
                        {item.channel} • {item.views} • {item.time}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>

            {/* Bottom Navigation */}
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
                  <View ><Image style={styles.plusIcon}
                    source={require("../assets/images/PlusIcon.png")}
                  /></View>   
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

  </View>
    
  );
  
}
