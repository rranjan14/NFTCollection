import {StyleSheet} from 'react-native';

export const styles = (height: number, width: number) =>
  StyleSheet.create({
    parent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: width * 0.01,
      paddingVertical: height * 0.01,
    },
  });
