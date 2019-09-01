import { createStackNavigator } from "react-navigation-stack";
import Feeds from "../pages/Feeds";
import QuestionSingle from "../pages/QuestionSingle";

export default createStackNavigator({
  QuestionSingle: QuestionSingle,
  Feeds: Feeds,
});
