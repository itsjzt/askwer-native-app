import React from "react";
import { createAppContainer } from "react-navigation";
import { Navigation } from "./navigation/routes";
import { View, StyleSheet } from "react-native";

export interface AppProps {}

const Nav = createAppContainer(Navigation);

const App: React.SFC<AppProps> = () => {
  return (
    <View style={styles.app}>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    // give the full space to page
    flex: 1,
    // Top navbar covers this space
    paddingTop: 32,
  },
});

export default App;
