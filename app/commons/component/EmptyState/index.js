import { View, Image } from "react-native";
import Text from "../Text/Text.component";
const EmptyImg = require("../../../../assets/empty-song.png");

const EmptyState = ({ keyword }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 80,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
      }}
    >
      <Image style={{ width: 150, height: 200 }} source={EmptyImg} />
      <Text
        color={"#000"}
        value={`No ${keyword} found!`}
        size={16}
        fontWeight={"bold"}
      />

      <Text
        color={"#000"}
        size={14}
        value={`Uh-oh! No ${keyword} match your search criteria. Please try different keyword!`}
        style={{ paddingTop: 10, textAlign: "center" }}
      />
    </View>
  );
};

export default EmptyState;
