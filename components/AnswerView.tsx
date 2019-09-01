import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import constants from "../utils/constants";
import SecondaryButton from "./SecondaryButton";
import AnswerAuthor from "./AnswerAuthor";

export interface AnswerViewProps {
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
  const { answer, author, createdAt } = props;

  return (
    <View style={styles.answer}>
      <AnswerAuthor {...author} createdAt={createdAt} />
      <Text>{answer}</Text>
      <View style={styles.actions}>
        <SecondaryButton onPress={() => {}}>
          <Text style={styles.actionText}>Upvote</Text>
        </SecondaryButton>
        <SecondaryButton onPress={() => {}}>
          <Text style={styles.actionText}>Downvote</Text>
        </SecondaryButton>
        <SecondaryButton onPress={() => {}}>
          <Text style={styles.actionText}>Report</Text>
        </SecondaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  answer: {
    padding: constants.lg,
  },
  actionText: {
    fontSize: constants.fontSmall,
  },
  actions: {
    flexDirection: "row",
    paddingTop: constants.lg,
  },
});

export default AnswerView;
