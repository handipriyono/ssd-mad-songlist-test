import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Image } from "expo-image";
import SongList from "../SongList/index";
import Styles from "./style";

const defaultIMg =
  "https://www.shutterstock.com/image-illustration/no-picture-available-placeholder-thumbnail-600nw-2179364083.jpg";

const ItemActrist = ({ data = [], isLoading }) => {
  return (
    <>
      <View key={data?.trackId} style={Styles.outer}>
        <View style={Styles.headerWrap}>
          <Image
            style={Styles.img}
            source={
              data?.artworkUrl100 ||
              data?.artworkUrl60 ||
              data?.artworkUrl30 ||
              defaultIMg
            }
            contentFit="cover"
            transition={200}
          />
          <Text style={Styles.name}>{data?.name}</Text>
        </View>
      </View>
      <View style={{ flex: 1, minHeight: 3 }}>
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
