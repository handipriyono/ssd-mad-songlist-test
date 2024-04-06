import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import useStoreSong from "../../commons/store";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { memo } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Styles from "./style";

const ItemRowList = ({ title, value, icon }) => {
  return (
    <View style={Styles.itemWrapper}>
      <View style={Styles.iconRow}>
        {icon}
        <Text style={{ fontWeight: "700", fontSize: 14 }}>{title}: </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 13 }}>{value || "-"}</Text>
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
          transition={100}
        />
        <View style={{ marginHorizontal: 10 }}>
          <View style={Styles.headerArea}>
            <View>
              <Text style={Styles.title}>{selected?.trackName}</Text>
            </View>
            <View style={{ flexDirection: "row-reverse" }}>
              <TouchableOpacity onPress={() => setFavoriteList(selected)}>
                <MaterialIcons
                  name={isFaved() ? "favorite" : "favorite-outline"}
                  size={25}
                  style={{ paddingRight: 5 }}
                  color={isFaved() ? "#fa4b5a" : "black"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.rowWrapper}>
            <ItemRow
              icon={
                <MaterialCommunityIcons
                  name="account-music"
                  size={16}
                  color="#808080"
                />
              }
              title="Artist Name"
              value={selected?.artistName}
            />
            <ItemRow
              icon={
                <MaterialIcons name="audiotrack" size={15} color="#808080" />
              }
              title="Track Name"
              value={selected?.trackName}
            />
            <ItemRow
              icon={
                <MaterialIcons name="art-track" size={15} color="#808080" />
              }
              title="Collection"
              value={selected?.collectionName}
            />
            <ItemRow
              icon={<FontAwesome5 name="flag-usa" size={12} color="#808080" />}
              title="Country"
              value={selected?.country}
            />
            <ItemRow
              icon={
                <Ionicons
                  name="calendar-number-outline"
                  size={13}
                  color="#808080"
                />
              }
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
