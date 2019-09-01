import { createSwitchNavigator } from "react-navigation";
import AppNavigator from "./AppNavigator";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
export const Navigation = createSwitchNavigator(
  {
    AppNavigator: AppNavigator,
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login"
  }
);
