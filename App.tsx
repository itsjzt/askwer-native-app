import React from "react";
import QuestionSingle from "./pages/QuestionSingle";

export interface AppProps {}

// todo: add react native navigation
const App: React.SFC<AppProps> = () => {
  return <QuestionSingle />;
};

export default App;
