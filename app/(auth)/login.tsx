import { StyleSheet, Text, View, Pressable } from 'react-native';
import PressableCom from '../../components/pressableCom';
export default function index() {

const handlePress = () => {
  console.log('Pressed');
};
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <PressableCom onPress={handlePress}>
        <Text style={{ color: '#fff' }}>Logins</Text>
      </PressableCom>

    </View>
  );
}
const styles = StyleSheet.create({});
