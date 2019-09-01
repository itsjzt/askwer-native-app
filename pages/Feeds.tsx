import * as React from "react";
import { View, StyleSheet } from "react-native";
import PostCard from "../components/QuestionCard";
import { postMock } from "../utils/mock";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <View style={styles.container}>
      <PostCard {...postMock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Feeds;
