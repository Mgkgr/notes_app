import 'react-native-gesture-handler';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from './components/StackNavigator';

export default function App() {
  return (
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

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Заметки" component={MyStack} options={{ headerMode: 'none', headerShown: false }} />
      <Tab.Screen name="Настройки" component={HomeScreen} options={{ headerMode: 'none', headerShown: false }} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Здесь вы можете настроить шрифт</Text>
    </View>
  );
}
