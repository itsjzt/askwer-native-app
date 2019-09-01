import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { postMock, answerMock } from "../utils/mock";
import AnswerView from "../components/AnswerView";
import QuestionView from "../components/QuestionView";

export interface QuestionSingleProps {}

const QuestionSingle: React.SFC<QuestionSingleProps> = () => {
  return (
    <View style={styles.container}>
      <QuestionView {...postMock} />
      <FlatList
        data={Array(10).fill(answerMock)}
        renderItem={({ item }) => <AnswerView {...item} />}
      />
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

export default QuestionSingle;
