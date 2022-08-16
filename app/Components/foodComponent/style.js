import {StyleSheet, Dimensions} from 'react-native';
import Constants from '../../config/Constants';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '48%',
    marginRight: 15,
  },
  image: {height: windowWidth / 3.5, width: '100%', borderRadius: 5},
  title: {
    color: Constants.APP_TEXT_COLOR,
    fontFamily: Constants.fonts.NORMAL,
    fontSize: 13.6,
    fontWeight: '700',
    marginTop: 7,
  },
  shortText: {
    color: Constants.APP_PLACEHOLDER_COLOR,
    fontFamily: Constants.fonts.NORMAL,
    fontWeight: '500',
    fontSize: 11.5,
    marginTop: 4,
  },
});

export default styles;
