import { View } from "react-native";
import TextInputCustom from "../../commons/component/TextInput/TextInput.component";
import Switch from "../../commons/component/Switch";
import SongList from "../../commons/component/SongList";
import ArtistSection from "../../commons/component/ArtistSection";
import useSearch from "./hooks/useSearch";
import useQueryMusic from "./hooks/useQueryMusic";
import { StatusBar } from "expo-status-bar";
import Styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const {
    active,
    params,
    onBtnSearchClick,
    hideValueSearch,
    onChangeSearch,
    search,
  } = useSearch();
  const { data, artistList, isLoading } = useQueryMusic({ params });

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.outer}>
        <TextInputCustom
          value={hideValueSearch ? "" : search}
          onChange={onChangeSearch}
          autoFocus={false}
          placeholder={"Search by song, artist.."}
          style={{ flex: 1 }}
        />

        <Switch
          onClick={onBtnSearchClick}
          active={active}
          titleRight={"Song"}
          titleLeft="Artist"
        />
      </View>
      {active === 1 ? (
        <ArtistSection data={artistList} isLoading={isLoading} />
      ) : (
        <View style={{ flex: 1, minHeight: 5 }}>
          <SongList data={data} navigation={navigation} isLoading={isLoading} />
        </View>
      )}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Home;
