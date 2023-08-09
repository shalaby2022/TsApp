import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingStart: 10,
      backgroundColor: '#222',
    },
    centeredView: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    errorText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'red',
    },
  });
