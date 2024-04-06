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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 3,
    marginRight: 10,
  },
  img: { width: "100%", borderRadius: 5, height: 200 },
  itemWrapper: {
    flexDirection: "row",
    paddingTop: 4,
    gap: 2,
    paddingBottom: 5,
  },
  title: { fontSize: 18, fontWeight: "bold", paddingTop: 10 },
});
