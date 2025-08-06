import { StyleSheet, Text, View, Image } from 'react-native';
import img from '../assets/img/adaptive-icon.png'
import { Link } from 'expo-router';

export default function index() {

  return (

    <View style={styles.container}>
      {/* <Image source={{ uri:'http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024'}}></Image> */}
      <Image source={img} style={styles.img}></Image>
      <Text style={styles.title}>123</Text>
      <Text style={{ marginTop: 20 }}>123</Text>
      <Text>123</Text>

      <View style={styles.cards}>
        <Text>card</Text>
      </View>
      <Link href="/demo">jump</Link>
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
    backgroundColor: 'blue',
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
