import { createStackNavigator } from "react-navigation-stack";
import Feeds from "../pages/Feeds";
export default createStackNavigator(
  {
    Feeds: Feeds,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        display: "none",
      },
    },
  }
);
