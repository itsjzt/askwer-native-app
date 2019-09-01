import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import constants from "../utils/constants";

export interface QuestionViewProps {
  questionText: string;
  author: {
    name: string;
    avatarUri: string;
  };
  questionTags: Array<string>;
}

const QuestionView: React.SFC<QuestionViewProps> = () => {
  return (
    <View style={styles.questionView}>
      <Text style={styles.questionText}>
        How can I calculate the value of PI accurately?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionView: {
    backgroundColor: constants.white,
    color: constants.black,
  },
  questionText: {
    fontWeight: "600",
    fontSize: constants.fontLarge,
  },
});

export default QuestionView;
