import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import store from "../redux/store";
import HomePage from "../components/HomePage";
import MutationPage from "../components/MutationPage";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Mutasi") {
                iconName = "list";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{ title: "Home" }}
          />
          <Tab.Screen
            name="Mutasi"
            component={MutationPage}
            options={{ title: "Mutasi" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;
