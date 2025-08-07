import { StyleSheet, Text, TextInput } from 'react-native';
import PressableCom from '../../components/pressableCom';
import ViewCom from '../../components/viewCom';
import { useState } from 'react';
export default function index() {

  const handlePress = () => {
    console.log(text, 'Pressed');
  };
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ViewCom safe={true} style={
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }
    }>
      <TextInput style={styles.textInput}
        placeholder="Enter you name"
        keyboardType="default"
        onChangeText={setText}
        value={text}
      />
        <TextInput style={styles.textInput}
        placeholder="Enter you password"
        keyboardType="default"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <PressableCom onPress={handlePress}>
        <Text style={{ color: '#fff' }}>Logins</Text>
      </PressableCom>

    </ViewCom>
  );
}
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#444242ff',
    color: '#fff',
    padding: 10,
    marginBottom: 10,
    width: '80%'
  },
});
