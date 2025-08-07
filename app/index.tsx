import { StyleSheet, Text, View, Image } from 'react-native';
import img from '../assets/img/adaptive-icon.png'
import { Link } from 'expo-router';
import TextView from '../components/textViex'

export default function index() {

  return (

    <View style={styles.container}>
      <Image source={img} style={styles.img}></Image>
      
      <TextView >
        <Text>textview</Text>    
      </TextView>

     
      <Link href="/login" style={styles.link}>Login</Link>
      <Link href="/text" style={styles.link}>text</Link>
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
  cards: {
    padding: 10,
    borderRadius: 10,
    // width:'100%'
  },
  img: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
}); //样式表
