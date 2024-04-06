import { StyleSheet } from "react-native";
export default StyleSheet.create({
  default: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  highlight: {
    backgroundColor: "#fff",
    borderColor: "#808080",
    borderWidth: 1,
  },
  spacingIcon: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  leftIcon: {
    flexDirection: "row-reverse",
  },
  iconDefault: {
    paddingHorizontal: 5,
  },
});
