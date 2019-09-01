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
  const s = styles;

  return (
    <View style={s.questionView}>
      <Text style={s.questionText}>
        How can I calculate the value of PI accurately?
      </Text>
      <Button title="Follow" onPress={() => console.log("follow")} />
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
    fontSize: constants.lg + constants.sm,
  },
});

export default QuestionView;
