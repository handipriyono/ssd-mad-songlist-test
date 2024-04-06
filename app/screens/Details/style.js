import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outer: {
    marginHorizontal: 10,
    backgroundColor: "#fff",
    minHeight: 60,
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
    alignContent: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerArea: {
    flexDirection: "column",
    paddingRight: 7,
    marginTop: 5,
  },
  iconRow: {
    flex: 0.5,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 150,
    paddingBottom: 5,
    borderBottomWidth: 5,
    borderBottomColor: "#eee",
  },
  itemWrapper: {
    flexDirection: "row",
    gap: 2,
    paddingVertical: 4,
  },
  rowWrapper: {
    marginTop: 15,
    borderRadius: 10,
    borderLeftWidth: 1,
    paddingVertical: 6,
    borderLeftColor: "#808080",
    borderStyle: "dashed",
    paddingLeft: 6,
  },
  title: { fontSize: 16, fontWeight: "bold", marginRight: 7 },
});
