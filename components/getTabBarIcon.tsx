import * as React from "react";
import { Ionicons } from "@expo/vector-icons"; // 6.2.2

export const getTabBarIcon = (navigation, _focused, tintColor) => {
  const { routeName } = navigation.state;
  const homeIcon = "md-home";
  const signupIcon = "md-add";
  const loginIcon = "md-log-in";
  const feedIcon = "md-paper";
  let iconName;
  if (routeName === "Feeds") {
    iconName = feedIcon;
  } else if (routeName === "Login") {
    iconName = loginIcon;
  } else if (routeName === "Signup") {
    iconName = signupIcon;
  } else {
    iconName = homeIcon;
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={25} color={tintColor} />;
};
