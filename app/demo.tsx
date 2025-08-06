import { StyleSheet, Text, View, } from 'react-native';
import { Link } from 'expo-router';


export default function index() {

  return (

    <View style={styles.container}>
      <Text style={styles.title}>demo</Text>
      <Link href="/">back</Link>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'red',
    fontSize: 20
  },

}); //样式表
