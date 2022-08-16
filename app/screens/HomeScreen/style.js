import {StyleSheet} from 'react-native';
import Constants from '../../config/Constants';

const styles = StyleSheet.create({
  headerBorder: {
    borderBottomColor: Constants.APP_TEXT_COLOR,
    borderBottomWidth: 3,
    paddingVertical: '4%',
  },
  headerText: {
    fontSize: 19.2,
    marginLeft: '5%',
    color: Constants.APP_TEXT_COLOR,
    fontFamily: Constants.fonts.BOLD,
  },
  textInputRow: {
    backgroundColor: Constants.APP_THEME_COLOR,
    marginHorizontal: '5%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderRadius: 7,
    marginVertical: 10,
  },
  textInput: {
    padding: 0,
    marginLeft: 15,
    fontFamily: Constants.fonts.NORMAL,
    flex: 1,
    fontSize: 12.8,
  },
  flatListContainer: {
    backgroundColor: Constants.APP_THEME_COLOR,
    paddingHorizontal: '5%',
  },
  flatlistHeaderContainer: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
  },
  flatListheaderText: {
    fontSize: 19.2,
    color: Constants.APP_TEXT_COLOR,
    fontFamily: Constants.fonts.BOLD,
  },
});
export default styles;
