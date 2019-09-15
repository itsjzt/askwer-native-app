import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import constants from "../utils/constants";
import FeedMinimal from "./FeedMinimal";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <FeedMinimal key={index} />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: constants.lg,
  },
});
export default Feeds;
