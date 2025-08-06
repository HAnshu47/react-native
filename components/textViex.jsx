// /Users/huangrui/Desktop/hr-25/bankapp/components/textViex.jsx
import { StyleSheet, useColorScheme, View, Text } from 'react-native';
import { Colors } from '../assets/color/color';

const TextView = ({ style = {}, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.text }, styles.container, style,]} {...props}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default TextView;
