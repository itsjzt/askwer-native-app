import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { postMock, answerMock } from "../utils/mock";
import AnswerView from "../components/AnswerView";
import QuestionView from "../components/QuestionView";
import AddMetaToPages from "../components/AddMetaToPages";

export interface QuestionSingleProps {}

const QuestionSingle: React.SFC<QuestionSingleProps> = () => {
  return (
    <AddMetaToPages>
      <View style={styles.container}>
        <ScrollView>
          <QuestionView key="0" {...postMock} />
          {Array(10)
            .fill(answerMock)
            .map((answer, index) => (
              <AnswerView key={index.toString()} {...answer} />
            ))}
        </ScrollView>
      </View>
    </AddMetaToPages>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QuestionSingle;
