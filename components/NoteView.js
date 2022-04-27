import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet,  } from 'react-native';
import NoteData from './NoteData';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Item(props) {
  var notesSubtitle = props.date + ' ' + props.text.substring(0, 10)
  return (
    <TouchableOpacity style={styles.item} onPress={() => (props.navigation.navigate('NoteEditView', { id: props.id }))
    }>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.row}> {notesSubtitle} </Text>
    </TouchableOpacity>
  )
}

const App = (props) => {
  const [ref, setRef] = useState();
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [noteDataState, setNoteDataState] = useState(NoteData);
  useEffect(() => {
    props.navigation.addListener(
      'focus',
      payload => {
        setNoteDataState(NoteData); console.log(NoteData); setIsDataChanged(true); if (ref) { ref.recordInteraction() };
      }
    );
  }, [])
  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} text={item.text} navigation={props.navigation} id={item.id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={(ref) => { setRef(ref) }}
        refreshing={true}
        data={noteDataState}
        extraData={isDataChanged}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  row: {
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 14,
    alignItems: "center"
  },
  title: {
    fontSize: 40,
  }
});

export default App;

