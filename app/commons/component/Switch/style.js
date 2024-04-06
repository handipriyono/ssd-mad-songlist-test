import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outer: {
    width: 150,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
    borderColor: "#eee",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
