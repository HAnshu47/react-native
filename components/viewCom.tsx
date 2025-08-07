import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../assets/color/color';
import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ViewCom = ({ style = {}, safe = false, ...props }) => {
  const insets = useSafeAreaInsets();
  const theme = useColorScheme() as 'light' | 'dark';
  const colorTheme = Colors[theme];


  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorTheme.background,
    },
    insetContainer: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }
  }), [colorTheme]);
  if (safe) return (
    <View style={[styles.insetContainer,styles.container, style]} {...props} >
      {/* 内容 */}
    </View>
  )
  return (
    <View style={styles.container} {...props} >
      {/* 内容 */}
    </View>
  );
}
export default ViewCom
