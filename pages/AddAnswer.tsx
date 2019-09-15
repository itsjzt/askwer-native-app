import * as React from "react";
import { Component } from "react";
import { NavigationContainerProps } from "react-navigation";
import { View, StyleSheet, Button } from "react-native";
import constants from "../utils/constants";
import { postMock } from "../utils/mock";
import QuestionMinimal from "../components/QuestionMinimal";
import TextField from "../components/TextField";

export interface AddAnswerProps extends NavigationContainerProps {}

export interface AddAnswerState {
  answerText: string;
}

class AddAnswer extends Component<AddAnswerProps, AddAnswerState> {
  state = { answerText: "" };

  onAnswerChange = (answerText: string) => {
    this.setState({ answerText });
  };

  render() {
    const { answerText } = this.state;
    const { onAnswerChange } = this;
    return (
      <View style={styles.container}>
        <QuestionMinimal {...postMock} />
        <TextField
          value={answerText}
          onChangeText={onAnswerChange}
          placeholder=""
          name="Write Your Answer"
        />
        <Button
          title="Add Answer"
          onPress={() => {}}
          color={constants.primaryColor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: constants.lg,
  },
  muted: {
    color: constants.darkGray,
    fontSize: constants.fontSmall,
  },
});

export default AddAnswer;
