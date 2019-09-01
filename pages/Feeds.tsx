import * as React from "react";
import { View, StyleSheet } from "react-native";
import QuestionView from "../components/QuestionView";
import { postMock, answerMock } from "../utils/mock";
import AnswerView from "../components/AnswerView";
import QuestionMinimal from "../components/QuestionMinimal";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <View style={styles.container}>
      <QuestionMinimal {...postMock} />
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
