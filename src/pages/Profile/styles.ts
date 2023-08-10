import {StyleSheet} from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    headerBackground: {
      // backgroundColor: '#52489C',
      backgroundColor: '#ddd',
      width: '100%',
      height: '16%',
      borderBottomLeftRadius: 60,
      borderBottomRightRadius: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 7,
      alignSelf: 'center',
      marginBottom: 10,
    },
    userImgWrapper: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#fff',
    },
    notification: {
      width: 10,
      height: 10,
      borderRadius: 5,
      position: 'absolute',
      top: -2,
      right: 22,
      // backgroundColor: '#f00',
    },
    bellImg: {
      width: 30,
      height: 30,
      tintColor: '#999',
      marginRight: 20,
    },
    userImg: {
      width: 35,
      height: 35,
      tintColor: '#999',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 30,
      color: '#999',
    },
    flatList: {
      width: '90%',
      alignSelf: 'center',
      marginBottom: 10,
      flex: 1,
    },
    btnWrapper: {
      backgroundColor: '#eee',
      marginVertical: 10,
      paddingHorizontal: 8,
      paddingVertical: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 7,
      shadowOpacity: 0.7,
      shadowRadius: 3,
      shadowColor: '#aaa',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      elevation: 4,
    },
    btnText: {
      width: '75%',
      paddingVertical: 10,
    },
    btnTitle: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
      paddingBottom: 7,
    },
    btnTitleNoText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#333',
    },
    icon: {
      width: 24,
      height: 24,
    },
    rule: {
      width: '90%',
      height: 0.4,
      backgroundColor: '#444',
      alignSelf: 'center',
    },
    infoTxt: {
      fontSize: 14.5,
      color: '#777',
    },
    footerSeparator: {
      width: '100%',
      height: 50,
    },
  });
