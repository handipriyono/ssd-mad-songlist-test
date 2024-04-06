import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outer: {
    marginHorizontal: 10,
    backgroundColor: "#fff",
    minHeight: 70,
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    alignContent: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  loader: {
    marginTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: { width: 70, height: "100%", borderRadius: 10 },
  textWrapper: {
    paddingLeft: 5,
    flex: 1,
    justifyContent: "center",
  },
  subText: { fontSize: 12, color: "#808080" },
  act: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 38,
  },
});
