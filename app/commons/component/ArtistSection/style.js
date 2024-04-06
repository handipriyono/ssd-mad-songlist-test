import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outer: {
    backgroundColor: "#fff",
    minHeight: 60,
    borderRadius: 10,
    flexDirection: "row",
    paddingTop: 15,
    alignContent: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerWrap: { flex: 1, paddingHorizontal: 10, alignItems: "center" },
  itemWrap: {
    minHeight: 80,
    paddingBottom: 50,
  },
  loading: {
    marginTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 5,
    textAlign: "left",
  },
  img: {
    width: "60%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textWrapper: {
    paddingLeft: 5,
    justifyContent: "center",
  },
  subText: { fontSize: 12, color: "#808080" },
  act: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 38,
  },
});
