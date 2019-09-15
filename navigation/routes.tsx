import * as React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import QuestionSingle from "../pages/QuestionSingle";
import Feeds from "../pages/Feeds";
import AddQuestion from "../pages/AddQuestion";
import AddAnswer from "../pages/AddAnswer";
import { createStackNavigator } from "react-navigation-stack";
import AddMetaToPages from "../components/AddMetaToPages";
import EditProfile from "../pages/EditProfile";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Notification from "../pages/Notification";

const routes = {
  QuestionSingle: RouteWrapper(QuestionSingle),
  Home: RouteWrapper(Feeds),
  Login: RouteWrapper(Login),
  Signup: RouteWrapper(Signup),
  Ask: RouteWrapper(AddQuestion),
  Profile: RouteWrapper(Profile),
  EditProfile: RouteWrapper(EditProfile),
  Settings: RouteWrapper(Settings),
  AddAnswer: RouteWrapper(AddAnswer),
  Notification: RouteWrapper(Notification),
};

function RouteWrapper(Component) {
  return function RouteComponent(props) {
    return (
      <AddMetaToPages {...props}>
        <Component {...props} />
      </AddMetaToPages>
    );
  };
}

const options = {
  initialRouteName: "Profile",
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
