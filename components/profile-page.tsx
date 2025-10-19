import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';



import { Link } from 'expo-router';


export default function ProfilePage() {

  const {width} = useWindowDimensions();
  const isLargeScreen = width > 600; //for tablet or web adjust breakpoint
  
  const styles = StyleSheet.create({
    
    container: {
      flex:1,
      backgroundColor: '#0f0f0f', 
      paddingTop: 0,

    },
    content:{
      flex: 1
    },
    profileSection: {
      //padding: 18,
       paddingHorizontal: 18,
       paddingBottom: 18,
       paddingTop: 1
    },
    // profileRow: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   marginTop: 4
    // },
    profileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#222'
    },
    profileInfo:{
      marginLeft: 16,
      flex: 1,
      justifyContent: 'center'
    },
    channelName: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
      color: '#ffffff'
    },
    handleAndButtonRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4
    },
    channelHandle:{
      fontSize: 14,
      color: "#aaaaaa",
      //marginBottom: 8,
    },
    viewChannelLink: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    // viewChannelButton: {
    //   backgroundColor: '#303030',
    //   paddingHorizontal: 12,
    //   paddingVertical: 6,
    //   borderRadius: 4,
    //   alignSelf: 'flex-start',
    // },
    viewChannelText: {
      fontSize: 14,
      color: '#aaaaaa',
      fontWeight: '500'
    },
    arrow: {
      fontSize: 16,
      color: '#3ea6ff',
      marginLeft: 4,
      marginTop: -1, 
    },
    separatorDot: {
      color: "#aaaaaa",
      fontSize: 14,
      marginHorizontal: 6
    },
    divider: {
      height: 1,
      backgroundColor: '#303030',
      marginVertical: 12
    },
    accountOptionsSection: {
      paddingVertical: 10,
      paddingLeft: 18,
    },
    optionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#272727',
      borderRadius: 25,
      paddingVertical: 8,
      paddingHorizontal: 14,
      marginRight: 10
    },
    optionText: {
      color: '#ffffff',
      fontSize: 14,
      marginLeft: 6,
      fontWeight: '500'
    },
    historyHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', 
      paddingHorizontal: 18,
      marginTop: 16,
      marginBottom: 10
    },
    historyTitle: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold'
    },
    viewAllButton: {
      borderColor: '#5e5e5e',
      borderWidth: 1,
      borderRadius: 16,
      paddingVertical: 4,
      paddingHorizontal: 14,
      justifyContent: 'center',
      alignItems: 'center'
    },
    viewAllButtonText: {
      color: '#ffffff',
      fontSize: 14,
      fontWeight: '500'
    }, 
    historyVideosRow:{
      paddingHorizontal: 18,
      paddingBottom: 16,
      flexDirection: 'row'
    },
    videoCard: {
      width: 160,
      marginRight: 12
    },
    thumbnail: {
      width: '100%',
      height: 90,
      borderRadius: 8,
      backgroundColor: '#222',
      marginBottom: 6
    },
    videoTitleRow: {
      flexDirection: 'row',
      //justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    videoTitle: {
      color: '#ffffff',
      fontSize: 13,
      fontWeight: '500',
      flex: 1,
      lineHeight: 17,
      marginRight: 4
    },
    moreIcon: {
      marginTop: 2
    },
    videoChannel: {
      color: '#aaaaaa',
      fontSize: 12,
      marginTop: 2,
    },
    playlistHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 18,
      marginTop: 16,
      marginBottom: 10
    },
    playlistsTitle: {
      color: '#ffffff',
      fontSize: 19,
      fontWeight: 700
    },
    playlistRight: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    addIcon: {
      marginRight: 18
    },
    playlistsViewAllButton: {
      borderColor: '#5e5e5e',
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 6,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    playlistsViewAllText: {
      color: '#ffffff',
      fontSize: 15,
      fontWeight: '600'
    },
    actionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 42,
      paddingVertical: 12,
      //marginTop: 16
    },
    actionIconContainer: {
      width: 50,
      height: 34,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 24,
      backgroundColor: 'transparent',
      transform: [{ scale: 1.1}]
    },
    actionText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500'
    },
    actionDivider: {
      height: 1,
      backgroundColor: '#666666',
      marginVertical: 12,
      marginHorizontal: 18
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#0f0f0f',
      paddingVertical: 8,
      borderTopWidth: 0.6,
      borderTopColor: '#666666'
    },
    navItem: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    navText: {
      color: '#aaaaaa',
      fontSize: 11,
      marginTop: 2
    },
    navTextActive: {
      color: '#ffffff',
      fontSize: 11,
      marginTop: 2,
      fontWeight: '600'
    },
    plusButton: {
      width: 44,
      height: 44,
      backgroundColor: '#353434ff',
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center'

    },
    navProfilePic: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#222',
      marginBottom: 2
    },
    topNav: {
      paddingTop: 10,
      paddingHorizontal: 10,
      paddingBottom: 10,
      backgroundColor: "#0f0f0f",
      height: 60,
      justifyContent: "center",
      
    },
    iconRow: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    icon: {
      marginLeft: 20
    },
    

 
  });

  return(
    <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor="#0f0f0f"/>

          {/*Left: Back arrow */}
          <Link href="/" ></Link>
        {/*Top Navbar */}
        
          <View style={styles.topNav}>          
            
            <View style={styles.iconRow}>
              <TouchableOpacity>
                <MaterialIcons name="cast" size={26} color="white" style={styles.icon}/>

              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={26} color="white" style={styles.icon}/>

              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons name="search" size={26} color="white" style={styles.icon}/>

              </TouchableOpacity>

              <TouchableOpacity>
                <Ionicons name="settings-outline" size={26} color="white" style={styles.icon}/>

              </TouchableOpacity>

            </View>

          </View>

        


        <ScrollView style={styles.content} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          <View style={styles.profileSection}>
            <View style={styles.profileHeader}>
              {/* Profile Image */} 
                <Image source={require('../assets/images/OIP.jpeg')} style={styles.profileImage}/>
            
            {/* Profile Info */}
            <View style={styles.profileInfo}>
              <Text style={styles.channelName}>Alice Smith</Text>
              <View style={styles.handleAndButtonRow}>
                <Text style={styles.channelHandle}>@AliceSmith0002</Text>
                <Text style={styles.separatorDot}>·</Text>
              <TouchableOpacity style={styles.viewChannelLink} onPress={() => alert('View channel pressed')}>
                <Text style={styles.viewChannelText}>View channel</Text>
                {/* <Text style={styles.arrow}>{'>'}</Text> */}
                <MaterialIcons name="chevron-right" size={18} color="#aaaaaa" />
              </TouchableOpacity>
              </View>
              </View>
            </View>
          </View>

          {/*Divider */}
          {/* <View style={styles.divider}/> */}

          {/*Horizontal options */}

          {/* Switch Account section */}
          <View style={styles.accountOptionsSection}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.optionButton}>
                <MaterialIcons name="switch-account" size={20} color="#fff" />
                <Text style={styles.optionText}>Switch account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <MaterialIcons name="account-circle" size={20} color="#fff" />
                <Text style={styles.optionText}>Google account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <MaterialIcons name="visibility-off" size={20} color="#fff" />
                <Text style={styles.optionText}>Turn off Incognito</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton}>
                <MaterialIcons name="share" size={20} color="#fff" />
                <Text style={styles.optionText}>Share channel</Text>
              </TouchableOpacity>
            </ScrollView>
          
          </View>
          {/* <View style={styles.divider}/> */}

          {/*History Section */}
        <View style={styles.historyHeader}>

        <Text style={styles.historyTitle}>History</Text>
        <TouchableOpacity style={styles.viewAllButton}> 
          <Text style={styles.viewAllButtonText}>View all</Text>

        </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.historyVideosRow}>
            {[
              {
              id: 1,
              title: '20 MINUTES PILATES ABS',
              channel: 'PILATES BY IZZY',
              thumbnail: require('../assets/playlists-history-imgs/pexels-amin-sujan-529242-1375883.jpg')
            },
            {
              id: 2,
              title: '25 MINUTES PILATES WORKOUT',
              channel: 'Move with Nicole',
              thumbnail: require('../assets/playlists-history-imgs/pexels-olly-917732.jpg')
            },
            {
              id: 3,
              title: 'Upper Back and Neck Mobility | 13-Minute Yoga Practice',
              channel: 'PILATES BY IZZY',
              thumbnail: require('../assets/playlists-history-imgs/pexels-rui-dias-469842-1472887.jpg')
            },
            {
              id: 4,
              title: 'Yoga for Lympathatic Flow',
              channel: 'Yoga With Adriene',
              thumbnail: require('../assets/playlists-history-imgs/girl-4981766_1280.jpg')
            },
            {
              id: 5,
              title: 'Flow Into Stillness | 30 Minute Yoga Practice',
              channel: 'Yoga With Adriene',
              thumbnail: require('../assets/playlists-history-imgs/woman-3053492_1280.jpg')
            }
            ].map(video => (
              <TouchableOpacity key={video.id} style={styles.videoCard}>
                {/*Thumbnail */}
                <Image source={typeof video.thumbnail === 'string' ? { uri: video.thumbnail} : video.thumbnail} style={styles.thumbnail}/>


                {/* Title + Menu Icon in same row */}
                <View style={styles.videoTitleRow}>
                  <View style={{flex: 1}}>
                    <Text style={styles.videoTitle} numberOfLines={2}>{video.title}</Text>
                  </View>
                    <MaterialIcons name='more-vert' size={18} color="#fffdfdff" style={styles.moreIcon}/>
                </View>

                {/*Channel Name */}

                <Text style={styles.videoChannel}>{video.channel}</Text>

              </TouchableOpacity>
            ))}

        </ScrollView>

            {/*Playlists Section */}
            <View style={styles.playlistHeader}>
              <Text style={styles.playlistsTitle}>Playlists</Text>

              <View style={styles.playlistRight}>
                <TouchableOpacity>
                  <MaterialIcons name='add' size={32} color="#ffffff" style={styles.addIcon}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.playlistsViewAllButton}>
                  <Text style={styles.playlistsViewAllText}>View all</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <View style={styles.divider}/> */}

            {/*Scrollable Playlists */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 18, paddingBottom: 20}}>
              {[
                {
                  id: 1,
                  name: 'Watch later',
                  isPrivate: true,
                  channel: 'Alice Smith',
                  videoCount: 18,
                  thumbnail: require('../assets/playlists-history-imgs/pexels-te-lensfix-380994-1371360.jpg')
                },
                {
                  id: 2,
                  name: 'Fav songs',
                  isPrivate: true,
                  channel: 'Alice Smith',
                  videoCount: 4,
                  thumbnail: require('../assets/playlists-history-imgs/crystal_clear_milky_way-full.jpg')
                },
                {
                  id: 3,
                  name: 'Meditation',
                  isPrivate: false,
                  channel: 'Alice Smith',
                  videoCount: 1,
                  thumbnail: require('../assets/playlists-history-imgs/pexels-pixabay-355863.jpg')
                },
                {
                  id: 4,
                  name: 'Hair tutorials',
                  isPrivate: false,
                  channel: 'Alex Gaboury',
                  videoCount: 40,
                  thumbnail: require('../assets/playlists-history-imgs/istockphoto-516849168-612x612.jpg')
                },
                {
                  id: 5,
                  name: 'Easy Back To School Hairstyles',
                  isPrivate: false,
                  channel: 'Alex Gaboury',
                  videoCount: 25,
                  thumbnail: require('../assets/playlists-history-imgs/istockphoto-522474036-612x612.jpg')
                },
                {
                  id: 6,
                  name: 'Liked videos',
                  isPrivate: true,
                  channel: 'Alex Gaboury',
                  videoCount: 25,
                  thumbnail: require('../assets/playlists-history-imgs/pexels-valentinantonucci-691637.jpg')
                }
              ].map(playlist => (
                <TouchableOpacity key={playlist.id} style={{marginRight: 14, width: 160}}>

                  {/*Thumbnail */}
                  <View style={{position: 'relative', shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 3, shadowOffset: {width: 0, height: 2}, elevation: 4, borderRadius: 8, marginBottom: 4, backgroundColor: '#000'}}>
                    {/*top shadow gradient overlay */}
                    <View style={{position: 'relative', borderRadius: 8, marginBottom: 4, backgroundColor: '#000'}}/>
                    
                    <Image source={ typeof playlist.thumbnail === 'string' ? {uri: playlist.thumbnail} : playlist.thumbnail } style={{width: 160, height: 90, borderRadius: 8, backgroundColor: '#222'}}/>

                    <View style={{position: 'absolute', top: 0, left: 0, right: 0,height: 0,borderTopLeftRadius: 8, borderTopRightRadius: 8, backgroundColor: 'rgba(0,0,0,0.35)', opacity: 0.7, shadowColor: '#000', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.3, shadowRadius: 5, elevation: 0}}/>

                    {/*bottom-right overlay for video count*/}
                    <View style={{position: 'absolute', bottom: 6, right: 6, backgroundColor: 'rgba(0,0,0,0.65)', borderRadius: 4, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6, paddingVertical: 2}}>
                      <MaterialIcons name="playlist-play" size={12} color="#fff"/>
                      <Text style={{color: '#fff', fontSize: 11, marginLeft: 3}}>{playlist.videoCount}</Text>
                    </View>
                  </View>

                  {/* PlayList title + menu icon */}
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8}}>
                    <Text style={[styles.videoTitle, {fontWeight: '600'}]} numberOfLines={1}>{playlist.name}</Text>
                    <MaterialIcons name='more-vert' size={16} color="#fff" style={styles.moreIcon}/>
                  </View>

                  {/*Info line */}
                  <Text style={[styles.videoChannel, {marginTop: 2}]}>{playlist.isPrivate ? `Private · Playlist`: `${playlist.channel} · Playlist` }</Text>

                  {isLargeScreen && (
                    <Text style={{color: '#aaaaaa', marginTop: 4}}>
                      View full playlist
                    </Text>
                  )}

                </TouchableOpacity>
              ))
              }
            </ScrollView>

            {/* Your videos  */}
            <TouchableOpacity style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 42,
              paddingVertical: 12,
              marginTop: 16
            }}>

            <View style={{width: 36, height: 30, borderWidth: 4,borderColor:'#fff', backgroundColor: '#000', borderRadius: 6, justifyContent: 'center', alignItems: 'center', marginRight: 29, marginLeft:6 }}>

            {/*Playbutton icon in center */}
            <MaterialIcons name='play-arrow' size={20} color='#fff'/>
               
            </View>

            {/*Play button icon  */}
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Your videos</Text>

            </TouchableOpacity>
            
            <View style={{height:1, backgroundColor: '#555555', marginVertical: 12,marginHorizontal: 18}}/>

            {/*Your Movies & TV */}
            <TouchableOpacity style={styles.actionRow}>
              <View style={styles.actionIconContainer}>
                <MaterialIcons name='movie' size={24} color='#fff'/>

              </View>
              <Text style={styles.actionText}>Your movies & TV</Text>
            </TouchableOpacity>

            {/*YouTube Premium */}
            <TouchableOpacity style={styles.actionRow}>
              <View style={styles.actionIconContainer}>
                <FontAwesome5 name="youtube" size={22} color="#fff" />

              </View>
              <Text style={styles.actionText}>Get YouTube Premium</Text>
            </TouchableOpacity>

            {/*Purchases and memberships */}
            <TouchableOpacity style={styles.actionRow}>
              <View style={styles.actionIconContainer}>
                <MaterialIcons name='local-offer' size={22} color='#fff'/>

              </View>
              <Text style={styles.actionText}>Purchases and memberships</Text>
            </TouchableOpacity>


            <View style={styles.actionDivider}/>

            {/*Time watched */}
            <TouchableOpacity style={styles.actionRow}>
              <View style={styles.actionIconContainer}>
                <MaterialIcons name='access-time' size={24} color='#fff'/>

              </View>
              <Text style={styles.actionText}>Time watched</Text>
            </TouchableOpacity>

            {/*Help & feedback*/}
            <TouchableOpacity style={styles.actionRow}>
              <View style={styles.actionIconContainer}>
                <MaterialIcons name='help-outline' size={24} color='#fff'/>

              </View>
              <Text style={styles.actionText}>Help & feedback</Text>
            </TouchableOpacity>

        </ScrollView>
        
        <View style={{height: 20}}/>
        
        {/*Bottom navigation bar */}
        <View style={styles.bottomNav}>
            
            
            <Link href="/" asChild>
            <TouchableOpacity style={styles.navItem}>
              <MaterialIcons name="home-filled" size={26} color="#ffffff"/>
              <Text style={styles.navTextActive}>Home</Text>
            </TouchableOpacity>
            </Link>
            

            <TouchableOpacity style={styles.navItem}>
              <MaterialIcons name="play-circle-outline" size={26} color="#ffffff"/>
              <Text style={styles.navText}>Shorts</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
              <View style={styles.plusButton}>
              <MaterialIcons name="add" size={26} color="#ffffff"/>
              </View>

            </TouchableOpacity>

            <Link href="/subscription" asChild >
            
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="subscriptions" size={26} color="#ffffff"/>
                <Text style={styles.navText}>Subscriptions</Text>
            </TouchableOpacity>   
            </Link>

            <TouchableOpacity style={styles.navItem}>
              <Image source={require('../assets/images/OIP.jpeg')} style={styles.navProfilePic}/>
              <Text style={styles.navText}>You</Text>

            </TouchableOpacity>

        </View>

        

    </View>
  );

  
}