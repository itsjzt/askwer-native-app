import { createSwitchNavigator } from "react-navigation";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Feeds from "../pages/Feeds";

const routes = {
  Login: Login,
  Signup: Signup,
  Feeds: Feeds,
};

const intialRoute = {
  initialRouteName: "Login",
};

export const Navigation = createSwitchNavigator(routes, intialRoute);
