import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    body: {
      height: deviceHeight
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
    imageList: {
      width: deviceWidth,
      flexDirection: 'column',
    },
    image: {
      width: deviceWidth,
      height: 630
    },
    description: {
      padding: 7,
    },
    alt: {
      fontSize: 16,
      fontWeight: 'bold',
      color: COLORS.black,
    },
  });