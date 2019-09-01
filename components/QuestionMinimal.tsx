import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import constants from "../utils/constants";

export interface QuestionMinimalProps {
  heading: string;
}

const QuestionMinimal: React.SFC<QuestionMinimalProps> = props => {
  const { heading } = props;
  return (
    <View style={styles.questionView}>
      <Text style={styles.questionText}>{heading}</Text>
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
