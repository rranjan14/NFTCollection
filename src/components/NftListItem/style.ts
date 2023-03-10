import {StyleSheet} from 'react-native';
import {normalize} from '../../util/helper';

export const styles = (height: number, _width: number) =>
  StyleSheet.create({
    container: {
      height: height * 0.5,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: height * 0.02,
    },
    utilityContainer: {
      position: 'absolute',
      width: '100%',
      bottom: 0,
      height: height * 0.1,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      borderRadius: 10,
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    detailsContainer: {
      flex: 0.8,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    titleContainer: {
      width: '100%',
    },
    title: {
      textAlign: 'left',
      color: 'white',
      fontSize: normalize(18),
      fontWeight: '600',
    },
    ownerAddress: {
      textAlign: 'left',
      color: 'white',
      fontSize: normalize(10),
      fontWeight: '400',
    },
    bookmarkButtonContainer: {
      flex: 0.2,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
