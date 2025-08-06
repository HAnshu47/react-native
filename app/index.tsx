import { StyleSheet, Text, View, Image } from 'react-native';
import img from '../assets/img/adaptive-icon.png'
import { Link } from 'expo-router';
import TextView from '../components/textViex'

export default function index() {

  return (

    <View style={styles.container}>
      <Image source={img} style={styles.img}></Image>
      <Text style={styles.title}>123</Text>
      <Text style={{ marginTop: 20 }}>123</Text>
      
      <TextView >
        <Text>123</Text>    
      </TextView>

      <View style={styles.cards}>
        <Text>card</Text>
      </View>
      <Link href="/login">jump</Link>
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
  }
}); //样式表
