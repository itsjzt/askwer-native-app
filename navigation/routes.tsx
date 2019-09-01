// import { createSwitchNavigator } from "react-navigation";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import QuestionSingle from "../pages/QuestionSingle";
import Feeds from "../pages/Feeds";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { getTabBarIcon } from "../components/getTabBarIcon";

const routes = {
  QuestionSingle: QuestionSingle,
  Feeds: Feeds,
  Login: Login,
  Signup: Signup,
};

const options = {
  initialRouteName: "Feeds",
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
  },
};

export const Navigation = createBottomTabNavigator(routes, options);

// @ts-ignore
// this is a ts error because string is not assinable to "none"|"flex"
// this is why you can hate strict types
// export const Navigation = createStackNavigator(routes, options);
