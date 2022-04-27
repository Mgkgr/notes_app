import React, { useEffects } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import NoteView from './NoteView';

const NotesListView = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left' }}>
      <NoteView navigation={navigation}  >
      </NoteView>
    </View>
  )
}
export default NotesListView