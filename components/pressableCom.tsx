import { StyleSheet, useColorScheme, View, Text, Pressable } from 'react-native';
import { Colors } from '../assets/color/color';

const TextView = ({ style = {}, ...props }) => {

  return (
    <Pressable style={({ pressed }) => [styles.btn , pressed&& styles.opacity, style]} {...props}>

    </Pressable>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  btn: { backgroundColor: Colors.primary, padding: 10, borderRadius: 5, margin: 10 },
  opacity: {
    opacity: 0.5
  }
});

export default TextView;
