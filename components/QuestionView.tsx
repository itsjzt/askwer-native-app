import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import constants from "../utils/constants";
import { formatDistanceToNow } from "date-fns";
import QuestionMinimal from "./QuestionMinimal";
import Tags, { Tag } from "./Tags";
import SecondaryButton from "./SecondaryButton";
import TimeFromNow from "./TimeFromNow";

export interface QuestionViewProps {
  heading: string;
  author: {
    name: string;
    username: string;
  };
  createdAt: Date;
  tags: Array<Tag>;
}

const QuestionView: React.SFC<QuestionViewProps> = props => {
  const { heading, author, createdAt, tags } = props;

  return (
    <View style={styles.question}>
      <View style={styles.wrapper}>
        <Tags tags={tags} />
        <QuestionMinimal text={heading} />
        <View style={styles.info}>
          <Text style={styles.usersName}>{author.name}</Text>
          <Text style={styles.mutedText}> added </Text>
          <TimeFromNow time={createdAt} style={styles.postedTime} />
        </View>
        <View style={styles.actions}>
          <SecondaryButton onPress={() => {}}>
            <Text style={styles.actionText}>Follow</Text>
          </SecondaryButton>
          <SecondaryButton onPress={() => {}}>
            <Text style={styles.actionText}>Report</Text>
          </SecondaryButton>
          <SecondaryButton style={styles.answer} onPress={() => {}}>
            <Text style={styles.answerText}>Answer</Text>
          </SecondaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question: {},
  wrapper: {
    padding: constants.lg,
  },
  heading: {
    color: constants.darkerGray,
    fontSize: constants.fontLarge,
    fontWeight: "600",
  },
  info: {
    flexDirection: "row",
    paddingTop: constants.md,
  },
  mutedText: {
    color: constants.darkGray,
    fontSize: constants.fontSmall,
  },
  usersName: {
    fontSize: constants.fontSmall,
    fontWeight: "600",
  },
  postedTime: {
    fontSize: constants.fontSmall,
    fontWeight: "600",
  },
  actions: {
    paddingTop: constants.lg,
    paddingBottom: constants.lg,
    flexDirection: "row",
  },
  actionText: {
    color: constants.darkerGray,
    fontSize: constants.fontSmall,
  },
  answer: {
    flex: 1,
    backgroundColor: constants.primaryColor,
  },
  answerText: {
    color: constants.white,
    textAlign: "center",
  },
});

export default QuestionView;
