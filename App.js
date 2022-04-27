import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ListView, Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import  NotesList from './components/view';
import MyStack from './components/StackNavigator';



export default function App() {
   return (
    // <View style={styles.container}>
    //   <Text>тема секс </Text>
    //   <Button title='laser major'/>  
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();

// const Notes = NotesList () 


function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Settings" component={MyStack} options={{headerMode: 'none', headerShown : false}}/>
      <Tab.Screen name="doka" component={HomeScreen} options={{headerMode: 'none', headerShown : false}} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>дота</Text>
    </View>
  );
}


// function SettingsScreen() {
//   return ( NotesList
//     // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     //   <Text>кс</Text>
//     // </View>
//   );
// }

