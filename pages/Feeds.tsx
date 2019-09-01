import * as React from "react";
import { View, StyleSheet } from "react-native";
import QuestionView from "../components/QuestionView";
import { postMock, answerMock } from "../utils/mock";
import AnswerView from "../components/AnswerView";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <View style={styles.container}>
      <QuestionView {...postMock} />
      <AnswerView {...answerMock} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Feeds;
