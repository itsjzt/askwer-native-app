import * as React from "react";
import { View, StyleSheet } from "react-native";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return <View style={styles.container}>Hello World</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Feeds;
