import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import constants from "../utils/constants";
import { NavigationScreenProps } from "react-navigation";

export interface TabBarProps extends NavigationScreenProps {}

const TabBar: React.SFC<TabBarProps> = props => {
  const TabBarIcons = [
    "md-paper",
    "md-create",
    "md-notifications",
    "md-settings",
  ];
  const TabBarText = ["Home", "Ask", "Notification", "Settings"];
  const activeRoute = props.navigation.state.routeName;
  const { navigate } = props.navigation;

  return (
    <View style={styles.tabBar}>
      {Array(4)
        .fill(null)
        .map((_, index) => {
          const currentIcon = TabBarIcons[index];
          const currentRoute = TabBarText[index];
          const changeRoute = () => navigate(TabBarText[index]);
          const isCurrentTabActive = activeRoute === currentRoute;
          const iconColor = isCurrentTabActive
            ? constants.primaryColor
            : constants.darkGray;

          return (
            <TouchableOpacity
              onPress={changeRoute}
              style={styles.tabBarItem}
              key={index}
            >
              <Ionicons name={currentIcon} size={24} color={iconColor} />
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
