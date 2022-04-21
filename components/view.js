import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';



export default function noteslistname() {
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         paddingTop: 22
        },
        item: {
          padding: 10,
          fontSize: 18,
          height: 44,
        },
      });
      
      const noteslist = (props) => {
        return (
          <View style={styles.container}>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ], <Text> {props.name}</Text>}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
        );
      }
      const noteslistname  = () => {
        return (
            <View>
               <noteslist name="jackson" />
            </View>
        );
      }