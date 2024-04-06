import { FlashList } from "@shopify/flash-list";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "../Text/Text.component";
import { useNavigation } from "@react-navigation/native";
import useStoreSong from "../../store";
import { useCallback } from "react";
import Styles from "./style";

const ItemList = ({
  isFaved,
  item,
  navigate,
  setSelected,
  setFavoriteList,
}) => {
  const submit = useCallback(() => {
    throttle(setFavoriteList(item));
  }, [item]);

  return (
    <View style={Styles.outer}>
      <View style={{ flex: 1, marginRight: 10 }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => {
            setSelected(item);
            navigate("Detail", {
              trackId: item?.trackId,
              title: item?.trackName,
            });
          }}
        >
          <View>
            <Image
              style={Styles.img}
              source={
                item?.artworkUrl100 || item?.artworkUrl60 || item?.artworkUrl30
              }
              contentFit="cover"
            />
          </View>
          <View style={Styles.textWrapper}>
            <Text
              numberOfLines={2}
              style={{ fontSize: 13, color: "#000" }}
              value={item?.trackName}
            />
            <Text
              numberOfLines={1}
              value={item?.artistName}
              style={Styles.subText}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={Styles.act}>
        <TouchableWithoutFeedback onPress={submit}>
          <MaterialIcons
            name={isFaved ? "favorite" : "favorite-outline"}
            size={20}
            color={isFaved ? "orange" : "black"}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const SongList = ({ data, isLoading }) => {
  const navigation = useNavigation();
  const setSelected = useStoreSong((state) => state.setSelected);
  const setFavoriteList = useStoreSong((state) => state.setFavoriteList);
  const favList = useStoreSong((state) => state.favoriteList);
  const isFav = useStoreSong((state) => state.isFav);

  const faved = useCallback(
    (v) => {
      return isFav(v);
    },
    [isFav]
  );

  return (
    <>
      <FlashList
        data={data}
        numColumns={1}
        extraData={[...data, favList]}
        keyExtractor={(item, index) => String(item?.trackId) + index}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        contentContainerStyle={{ padding: 6 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ItemList
            item={item}
            isFaved={faved(item?.trackId)}
            navigate={navigation?.navigate}
            setSelected={setSelected}
            setFavoriteList={setFavoriteList}
          />
        )}
        estimatedItemSize={200}
        ListFooterComponent={() => {
          return isLoading ? (
            <View style={Styles.loader}>
              <ActivityIndicator />
            </View>
          ) : null;
        }}
      />
    </>
  );
};

export default SongList;

function throttle(callback, delay = 400) {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
