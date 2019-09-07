import * as React from "react";
import { NavigationContainerProps } from "react-navigation";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import constants from "../utils/constants";

export interface TabBarProps extends NavigationContainerProps {}

const TabBar: React.SFC<TabBarProps> = props => {
  const TabBarIcons = [
    "md-paper",
    "md-create",
    "md-notifications",
    "md-person",
  ];
  const TabBarText = ["Home", "Ask", "Notification", "Profile"];

  // @ts-ignore
  const activeRoute = props.navigation.state.routeName;

  return (
    <View style={styles.tabBar}>
      {Array(4)
        .fill(null)
        .map((_, index) => {
          const currentIcon = TabBarIcons[index];
          return (
            <TouchableOpacity style={styles.tabBarItem} key={index}>
              <Ionicons
                name={currentIcon}
                size={24}
                color={constants.darkGray}
              />
              <Text style={styles.tabBarText}>{TabBarText[index]}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    padding: constants.md,
    alignSelf: "stretch",
    borderTopColor: constants.lighterGray,
    borderTopWidth: 1,
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
  },
  tabBarText: {
    color: constants.darkGray,
    fontSize: constants.fontSmallest,
  },
});

export default TabBar;
