import * as React from "react";
import { View, StyleSheet } from "react-native";
import QuestionMinimal from "../components/QuestionMinimal";
import { postMock, answerMock } from "../utils/mock";
import AnswerMinimal from "../components/AnswerMinimal";
import AnswerActions from "../components/AnswerActions";
import constants from "../utils/constants";

export interface FeedMinimalProps {}

const FeedMinimal: React.SFC<FeedMinimalProps> = () => {
  return (
    <View style={styles.feedMinimal}>
      <QuestionMinimal {...postMock} />
      <View style={styles.answerWrapper}>
        <AnswerMinimal {...answerMock} />
        <AnswerActions {...answerMock} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedMinimal: {
    paddingTop: constants.lg,
    paddingBottom: constants.lg,
    borderBottomColor: constants.lighterGray,
    borderBottomWidth: 1,
  },
  answerWrapper: {
    paddingTop: constants.md,
  },
});

export default FeedMinimal;
