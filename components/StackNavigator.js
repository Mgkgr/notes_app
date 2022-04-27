import { createStackNavigator } from '@react-navigation/stack';
import NoteData from './NoteData';
import NoteEditView from './NoteEditView';
import NotesListView from './view';

const Stack = createStackNavigator()

export default function MyStack(props) {

  const NotesList = NoteData.map((item) =>
    <Stack.Screen name={item.title} component={NoteEditView} key={item.id} />
  )
  return (
    <Stack.Navigator headerShown={false} options={{ headerMode: 'none', headerShown: false }}
    >

      <Stack.Screen name='NotesListView' component={NotesListView} key='1' options={{
        title: 'Заметки',
      }}
      />
      <Stack.Screen name='NoteEditView' component={NoteEditView} key='2' options={{
        title: ' ',
      }}
      />
    </Stack.Navigator>
  );
}