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
  headerWrap: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  itemWrap: {
    minHeight: 80,
    paddingBottom: 30,
  },
  loading: {
    marginTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 5,
    textAlign: "left",
  },
  img: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
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
