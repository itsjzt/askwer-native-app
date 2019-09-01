import * as React from "react";
import { View, StyleSheet } from "react-native";
import QuestionView from "../components/QuestionView";
import { postMock } from "../utils/mock";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <View style={styles.container}>
      <QuestionView {...postMock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Feeds;
