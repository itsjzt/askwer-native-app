import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import constants from "../utils/constants";
import { formatDistanceToNow } from "date-fns";

export interface QuestionViewProps {
  heading: string;
  author: {
    name: string;
    username: string;
  };
  createdAt: Date;
  tags: Array<string>;
}

const QuestionView: React.SFC<QuestionViewProps> = props => {
  const { heading, author, createdAt, tags } = props;

  return (
    <View style={styles.question}>
      <View style={styles.wrapper}>
        <View style={styles.tags}>
          {tags.map((tag, index) => (
            <Text style={styles.tagName} key={index}>{`#${tag}`}</Text>
          ))}
        </View>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.info}>
          <Text style={styles.usersName}>{author.name}</Text>
          <Text style={styles.mutedText}> added </Text>
          <Text style={styles.postedTime}>
            {formatDistanceToNow(createdAt)}
          </Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.action, styles.answer]}
            onPress={() => {}}
          >
            <Text style={styles.answerText}>Answer</Text>
          </TouchableOpacity>
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
  tags: {
    flexDirection: "row",
    paddingTop: constants.lg,
    paddingBottom: constants.lg,
  },
  tagName: {
    color: constants.darkGray,
    fontSize: constants.fontSmall,
    paddingRight: constants.sm,
    paddingLeft: constants.sm,
  },
  actions: {
    paddingTop: constants.lg,
    paddingBottom: constants.lg,
    flexDirection: "row",
  },
  action: {
    marginLeft: constants.md,
    marginRight: constants.md,
    alignSelf: "center",
    borderRadius: constants.sm,
    padding: constants.md,
    backgroundColor: constants.lighterGray,
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
