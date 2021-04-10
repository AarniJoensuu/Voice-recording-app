import { StyleSheet } from "react-native";
import { commonStyles } from "../../styles";

export default StyleSheet.create({
  recordButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    padding: 10,
    borderRadius: commonStyles.borderRadiusRoundCorners
  },
  buttonTextContainer: {
    flex: 1,
    justifyContent: "center"
  },
  centerText: {
    textAlign: commonStyles.centerText
  },
  whiteText: {
    color: commonStyles.whiteColor
  }
});