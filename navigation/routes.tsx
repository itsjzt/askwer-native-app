import { createSwitchNavigator } from "react-navigation";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import AppNavigator from "./AppNavigator";
import QuestionSingle from "../pages/QuestionSingle";
import Feeds from "../pages/Feeds";
import { createStackNavigator } from "react-navigation-stack";

const routes = {
  // AppNavigator: AppNavigator,
  QuestionSingle: QuestionSingle,
  Feeds: Feeds,
  Login: Login,
  Signup: Signup,
};

const intialRoute = {
  initialRouteName: "QuestionSingle",
};

export const Navigation = createStackNavigator(routes, intialRoute);
