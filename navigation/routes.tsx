import { createSwitchNavigator } from "react-navigation";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import QuestionSingle from "../pages/QuestionSingle";
import Feeds from "../pages/Feeds";
import { createStackNavigator } from "react-navigation-stack";

const routes = {
  QuestionSingle: QuestionSingle,
  Feeds: Feeds,
  Login: Login,
  Signup: Signup,
};

const options = {
  initialRouteName: "QuestionSingle",
  defaultNavigationOptions: {
    headerStyle: {
      display: "none",
    },
  },
};

// @ts-ignore
// this is a ts error because string is not assinable to "none"|"flex"
// this is why you can hate strict types
export const Navigation = createStackNavigator(routes, options);
