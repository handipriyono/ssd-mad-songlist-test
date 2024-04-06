import { View, TouchableOpacity, Text } from "react-native";
import Styles from "./style";
import { EvilIcons } from "@expo/vector-icons";

const Switch = ({ active, onClick, titleLeft, titleRight }) => {
  const checkStyle = ({ isActive }) => {
    return {
      bg: isActive ? "#0000fb" : "#fff",
      text: isActive ? "#FFF" : "#000",
      border: isActive ? 1 : 0,
    };
  };

  return (
    <>
      <View style={Styles.outer}>
        <View
          style={{
            ...Styles.inner,
            backgroundColor: checkStyle({ isActive: active === 1 })?.bg,
            borderWidth: checkStyle({ isActive: active === 1 })?.border,
          }}
        >
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              onClick(1);
            }}
          >
            <Text
              style={{
                paddingLeft: 5,
                textAlign: "center",
                color: checkStyle({ isActive: active === 1 })?.text,
              }}
            >
              {titleLeft}
            </Text>
            {active === 1 && <EvilIcons name="search" size={22} color="#fff" />}
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...Styles.inner,
            backgroundColor: checkStyle({ isActive: active === 2 })?.bg,
            borderWidth: checkStyle({ isActive: active === 2 })?.border,
          }}
        >
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => {
              onClick(2);
            }}
          >
            <Text
              style={{
                paddingLeft: 5,
                textAlign: "center",
                color: checkStyle({ isActive: active === 2 })?.text,
              }}
            >
              {titleRight}
            </Text>
            {active === 2 && (
              <EvilIcons
                style={{ paddingHorizontal: 5 }}
                name="search"
                size={20}
                color="#fff"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Switch;
