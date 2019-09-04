import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import SecondaryButton from "./SecondaryButton";
import constants from "../utils/constants";

export interface AnswerActionsProps {
  id: string;
}

const AnswerActions: React.SFC<AnswerActionsProps> = props => {
  return (
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
  );
};

const styles = StyleSheet.create({
  actionText: {
    fontSize: constants.fontSmall,
  },
  actions: {
    flexDirection: "row",
    paddingTop: constants.lg,
  },
});

export default AnswerActions;
