import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useStoreSong from "../../commons/store";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { memo } from "react";
import Styles from "./style";

const ItemRowList = ({ title, value }) => {
  return (
    <View style={Styles.itemWrapper}>
      <View style={{ flex: 0.5 }}>
        <Text style={{ fontWeight: "bold" }}>{title}: </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{value || "-"}</Text>
      </View>
    </View>
  );
};
const ItemRow = memo(ItemRowList);

const Detail = ({}) => {
  const selected = useStoreSong((state) => state.selected);
  const favList = useStoreSong((state) => state.favoriteList);
  const setFavoriteList = useStoreSong((state) => state.setFavoriteList);

  const isFaved = (key) => {
    return favList?.[selected?.trackId] ? true : false;
  };

  const dateFormat = (d) => {
    try {
      return new Date(d)?.toLocaleString();
    } catch (error) {
      return "-";
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={Styles.img}
          source={
            selected?.artworkUrl100 ||
            selected?.artworkUrl60 ||
            selected?.artworkUrl30
          }
          contentFit="cover"
          transition={200}
        />
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <View style={Styles.headerArea}>
            <Text style={Styles.title}>{selected?.trackName}</Text>
            <TouchableOpacity onPress={() => setFavoriteList(selected)}>
              <MaterialIcons
                name={isFaved() ? "favorite" : "favorite-outline"}
                size={22}
                color={isFaved() ? "orange" : "black"}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <ItemRow title="Artist Name" value={selected?.artistName} />
            <ItemRow title="Track Name" value={selected?.trackName} />
            <ItemRow title="Collection" value={selected?.collectionName} />
            <ItemRow title="Country" value={selected?.country} />
            <ItemRow
              title="Release date"
              value={dateFormat(selected?.releaseDate)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
