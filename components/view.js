import React, {useEffects} from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { Component } from 'react/cjs/react.production.min';
import NoteView from './NoteView';  
import MyStack from './StackNavigator';

 const NotesListView = ({navigation}) => {
    // React.useEffect=navigation.addListener('focus',()=>{this.forceUpdate})
    return (
    <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left' }}>
      <NoteView navigation={navigation}  >

      </NoteView>
     {/* <MyStack/> */}
    </View> 
    )
}


// const NotesList = () => {
//     return (
//     NoteView
//     )
// }



  

export default NotesListView