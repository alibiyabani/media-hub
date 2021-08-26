import React,{useEffect,useState} from 'react';
import { View,StyleSheet,BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  Netinfo from '@react-native-community/netinfo'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Snackbar } from 'react-native-paper';

import {MoviesNavigator,SeriesNavigator,BoxOfficeNavigator} from './app/components/navigation/CustomNavigation'

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [connection,setConnection] = useState(true)


  const netState = async () => {
    const netinfo = await Netinfo.fetch();
    setConnection(netinfo.isConnected);
  }
  useEffect(()=>{
    netState();
  },[])

  const onDismissSnackBar = () => BackHandler.exitApp;



  if(!connection)
  {
    return (
     <View style={styles.container}>
        <Snackbar visible={connection}  onDismiss={onDismissSnackBar}  action={{label: 'Close',onPress: BackHandler.exitApp}}>
          Internet Connection Failed!        
        </Snackbar>
     </View>
    )
  }
  return (

      <NavigationContainer style={{backgroundColor:'#121212'}}>
        <Tab.Navigator
              initialRouteName="Top Movies"
              activeColor="#1ebea5"
              inactiveColor="#808080"
              labelStyle={{ fontSize: 10 }}
              barStyle={{ backgroundColor: '#262626' }}
          >
          <Tab.Screen name="Top Movies" component={MoviesNavigator} 
            options={{
              tabBarLabel: 'Top Movies',
              tabBarIcon :  ({color}) => (<MaterialCommunityIcons name="movie-roll" color={color} size={20} />),           
            }}
          />
          <Tab.Screen name="Top Series" component={SeriesNavigator} 
            options={{
              tabBarLabel: 'Top Series',
              tabBarIcon :  ({color}) => (<MaterialCommunityIcons name="youtube-tv" color={color} size={20} />),           
            }}
          />
          <Tab.Screen name="Box Office" component={BoxOfficeNavigator} 
            options={{
              tabBarLabel: 'Box Office',
              tabBarIcon :  ({color}) => (<MaterialCommunityIcons name="popcorn" color={color} size={20} />),           
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#121212',
      paddingTop:5,
      justifyContent:'center',
      alignItems:'center',
      flex: 1,    
   },
})


