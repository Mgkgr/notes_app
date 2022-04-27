import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import { onChange } from 'react-native-reanimated';
import NoteData from './NoteData'; 


export default function NoteEditView (props) {
     console.log(NoteData)
   
    var foundNote=NoteData.find(element => element.id==props.route.params.id)
    var noteIndex=NoteData.findIndex(element => element.id==props.route.params.id)
    const [notesText, setNotesText] = useState(foundNote.text);  
    const [notesTitle, setNotesTitle] = useState(foundNote.title);  
    return (
        <View  title={foundNote.title} > 
            <TextInput value={notesTitle} onChangeText={title => {setNotesTitle(title);NoteData[noteIndex].title=title; console.log(NoteData)}} >
            </TextInput>

            <TextInput value={notesText} onChangeText={text => setNotesText(text)}  >
            </TextInput>
        </View>
    );
    }