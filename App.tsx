import React from "react";
import QuestionSingle from "./pages/QuestionSingle";
import { createAppContainer } from "react-navigation";
import { Navigation } from "./navigation/routes";

export interface AppProps {}

// todo: add react native navigation
const App: React.SFC<AppProps> = () => {
  return <Nav />;
};
const Nav = createAppContainer(Navigation);
export default App;
