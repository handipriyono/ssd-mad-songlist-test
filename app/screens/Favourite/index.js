import { SafeAreaView, Image, View, Text } from "react-native";
import SongList from "../../commons/component/SongList/index";
import useMusicStore from "../../commons/store/index";
const ImgFav = require("../../../assets/favourite.png");
import Styles from "./style";

const Favourite = () => {
  const favList = useMusicStore((state) => state.favoriteList);
  const dataFav = Object?.values(favList)?.filter((it) => it);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {dataFav?.length ? (
        <SongList data={dataFav} />
      ) : (
        <View style={Styles.notFound}>
          <Image style={Styles.img} source={ImgFav} />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            No Favorites Yet!
          </Text>
          <Text style={{ fontSize: 14, paddingTop: 10, textAlign: "center" }}>
            Tap the heart icon to add songs to your collection.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favourite;
