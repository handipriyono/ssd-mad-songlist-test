import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import Home from "../screens/Home";
import Favourite from "../screens/Favourite";
import Details from "../screens/Details";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "#000",
          headerTitle: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="applemusic" size={24} color={color} />
          ),
          headerLeft: () => {
            return (
              <View
                style={{
                  paddingLeft: 20,
                  padding: 10,
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="music-circle"
                  size={26}
                  color="black"
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={({ navigation, route }) => ({
          tabBarActiveTintColor: "#000",
          tabBarShowLabel: false,
          // headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ paddingLeft: 20 }}
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="arrowleft" size={24} color="#4B4B4B" />
              </TouchableOpacity>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}

const NavigationList = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Group>
            <Stack.Screen
              name="Dashboard"
              options={{ headerShown: false }}
              component={MyTabs}
            />
            <Stack.Screen
              name="Detail"
              options={({ navigation, route }) => ({
                headerTitleAlign: "center",
                headerTitle: route?.params?.title,
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="#4B4B4B" />
                  </TouchableOpacity>
                ),
              })}
              // options={{ headerShown: false }}
              component={Details}
            />
          </Stack.Group>
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationList;
