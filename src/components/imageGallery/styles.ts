import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    body: {
      height: deviceHeight
    },
    image: {
      width: deviceWidth,
      height: deviceHeight,
    },
    formContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '100%',
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: deviceWidth - 250,
      height: 40,
      borderWidth: 1,
      borderColor: COLORS.darkBlue,
      borderRadius: 7,
      backgroundColor: COLORS.white,
      padding: 10,
      marginRight: 10,
    },
  });