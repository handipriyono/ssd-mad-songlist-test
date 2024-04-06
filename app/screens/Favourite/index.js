import { SafeAreaView } from "react-native";
import SongList from "../../commons/component/SongList/index";
import useMusicStore from "../../commons/store/index";

const Favourite = () => {
  const favList = useMusicStore((state) => state.favoriteList);
  const dataFav = Object?.values(favList)?.filter((it) => it);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SongList data={dataFav} />
    </SafeAreaView>
  );
};

export default Favourite;
