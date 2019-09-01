import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../utils/constants";
import SecondaryButton from "./SecondaryButton";
import TimeFromNow from "./TimeFromNow";
import AvatarSmall from "./AvatarSmall";

export interface AnswerAuthorProps {
  name: string;
  username: string;
  avatar: { uri: string };
  createdAt: Date;
}

const AnswerAuthor: React.SFC<AnswerAuthorProps> = props => {
  const { name, username, avatar, createdAt } = props;
  return (
    <View style={styles.meta}>
      <AvatarSmall avatar={avatar} username={username} />
      <View style={styles.authorMeta}>
        <Text style={styles.authorName}>{name}</Text>
        <TimeFromNow time={createdAt} style={styles.time} />
      </View>
      <SecondaryButton onPress={() => {}}>
        <Text style={styles.followText}>Follow</Text>
      </SecondaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
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
  followText: {
    fontSize: constants.fontSmall,
  },
});

export default AnswerAuthor;
