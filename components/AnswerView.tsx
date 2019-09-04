import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import constants from "../utils/constants";
import AnswerAuthor from "./AnswerAuthor";
import AnswerActions from "./AnswerActions";

export interface AnswerViewProps {
  id: string;
  answer: string;
  createdAt: Date;
  author: {
    name: string;
    username: string;
    avatar: {
      uri: string;
    };
  };
}

const AnswerView: React.SFC<AnswerViewProps> = props => {
  const { id, answer, author, createdAt } = props;

  return (
    <View style={styles.answer}>
      <AnswerAuthor {...author} createdAt={createdAt} />
      <Text>{answer}</Text>
      <AnswerActions id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  answer: {
    padding: constants.lg,
    borderBottomColor: constants.lighterGray,
    borderBottomWidth: constants.xl,
  },
});

export default AnswerView;
