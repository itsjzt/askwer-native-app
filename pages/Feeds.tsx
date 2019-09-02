import * as React from "react";
import { View, StyleSheet } from "react-native";
import { postMock, answerMock } from "../utils/mock";
import QuestionMinimal from "../components/QuestionMinimal";
import AnswerMinimal from "../components/AnswerMinimal";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <View style={styles.container}>
      <QuestionMinimal {...postMock} />
      <View style={styles.answerWrapper}>
        <AnswerMinimal {...answerMock} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  answerWrapper: {
    paddingTop: 8,
  },
});
export default Feeds;
