import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { postMock, answerMock } from "../utils/mock";
import QuestionMinimal from "../components/QuestionMinimal";
import AnswerMinimal from "../components/AnswerMinimal";
import AddMetaToPages from "../components/AddMetaToPages";
import constants from "../utils/constants";
import AnswerActions from "../components/AnswerActions";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <AddMetaToPages>
      <View style={styles.container}>
        <ScrollView>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <View style={styles.feedEach} key={index}>
                <QuestionMinimal {...postMock} />
                <View style={styles.answerWrapper}>
                  <AnswerMinimal {...answerMock} />
                  <AnswerActions {...answerMock} />
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </AddMetaToPages>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.lighterGray,
  },
  answerWrapper: {
    paddingTop: constants.md,
  },
  feedEach: {
    padding: constants.lg,
    backgroundColor: constants.white,
    marginBottom: constants.xl,
  },
});
export default Feeds;
