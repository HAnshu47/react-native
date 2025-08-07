import { StyleSheet, Text, SafeAreaView } from 'react-native';
import PressableCom from '../../components/pressableCom';
import ViewCom from '../../components/viewCom';
export default function index() {

  const handlePress = () => {
    console.log('Pressed');
  };
  return (
    <ViewCom safe={true}>
      <PressableCom onPress={handlePress}>
        <Text style={{ color: '#fff' }}>Logins</Text>
      </PressableCom>

    </ViewCom>
  );
}
const styles = StyleSheet.create({});
