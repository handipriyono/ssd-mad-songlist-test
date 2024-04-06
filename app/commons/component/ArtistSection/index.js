import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import SongList from "../SongList/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Styles from "./style";

const defaultIMg =
  "https://www.shutterstock.com/image-illustration/no-picture-available-placeholder-thumbnail-600nw-2179364083.jpg";

const ItemActrist = ({ data = [], isLoading }) => {
  return (
    <>
      <View key={data?.trackId} style={Styles.outer}>
        <View style={Styles.headerWrap}>
          <MaterialCommunityIcons
            name="account-music"
            size={20}
            color="#F94C57"
          />
          <Text style={Styles.name}>{data?.name}</Text>
        </View>
      </View>
      <View style={{ flex: 1, minHeight: 3, backgroundColor: "#fff" }}>
        <SongList data={data?.items} isLoading={isLoading} />
      </View>
    </>
  );
};

const ArtistSection = ({ data, isLoading }) => {
  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        {isLoading ? (
          <View style={Styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          Object?.keys(data || [])?.map((key, idx) => (
            <View key={key} style={Styles.itemWrap}>
              <ItemActrist
                isLoading={isLoading}
                data={data?.[key]}
                key={key + idx}
              />
            </View>
          ))
        )}
      </ScrollView>
    </>
  );
};
export default ArtistSection;
