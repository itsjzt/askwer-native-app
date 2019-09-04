import * as React from "react";
import { View, StyleSheet } from "react-native";
import { postMock, answerMock, userMock } from "../utils/mock";
import QuestionMinimal from "../components/QuestionMinimal";
import AnswerMinimal from "../components/AnswerMinimal";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import AddMetaToPages from "../components/AddMetaToPages";

export interface FeedsProps {}

const Feeds: React.SFC<FeedsProps> = () => {
  return (
    <AddMetaToPages>
      <View style={styles.container}>
        <QuestionMinimal {...postMock} />
        <View style={styles.answerWrapper}>
          <AnswerMinimal {...answerMock} />
        </View>
      </View>
    </AddMetaToPages>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  answerWrapper: {
    paddingTop: 8,
  },
});
export default Feeds;
