import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import constants from "../utils/constants";

export interface QuestionMinimalProps {
  text: string;
}

const QuestionMinimal: React.SFC<QuestionMinimalProps> = props => {
  const { text } = props;
  return (
    <View style={styles.questionView}>
      <Text style={styles.questionText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionView: {
    backgroundColor: constants.white,
    color: constants.darkerGray,
  },
  questionText: {
    fontWeight: "600",
    fontSize: constants.fontLarge,
  },
});

export default QuestionMinimal;
