import { createSwitchNavigator } from "react-navigation";
import AppNavigator from "./AppNavigator";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Feeds from "../pages/Feeds";

const routes = {
  AppNavigator: AppNavigator,
  Login: Login,
  Signup: Signup,
  Feeds: Feeds,
};

const intialRoute = {
  initialRouteName: "Login",
};

export const Navigation = createSwitchNavigator(routes, intialRoute);
