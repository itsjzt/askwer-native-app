import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import constants from "../utils/constants";
import SecondaryButton from "./SecondaryButton";
import TimeFromNow from "./TimeFromNow";

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
      <View style={styles.meta}>
        <Image style={styles.avatar} source={{ uri: author.avatar.uri }} />
        <View style={styles.authorMeta}>
          <Text style={styles.authorName}>{author.name}</Text>
          <TimeFromNow time={createdAt} style={styles.time} />
        </View>
        <SecondaryButton onPress={() => {}}>
          <Text style={styles.followText}>Follow</Text>
        </SecondaryButton>
      </View>
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
  meta: {
    flexDirection: "row",
    paddingBottom: constants.lg,
  },
  authorMeta: {
    flex: 1,
    paddingLeft: constants.lg,
  },
  authorName: {
    fontSize: constants.fontSmall,
  },
  time: {
    fontSize: constants.fontSmall,
    color: constants.darkGray,
  },
  avatar: {
    width: constants.xl,
    height: constants.xl,
    borderRadius: constants.xl,
  },
  followText: {
    fontSize: constants.fontSmall,
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
