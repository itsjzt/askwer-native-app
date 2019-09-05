import * as React from "react";
import { Component } from "react";
import { NavigationContainerProps } from "react-navigation";
import AddMetaToPages from "../components/AddMetaToPages";
import { View, StyleSheet, Button } from "react-native";
import constants from "../utils/constants";
import { postMock } from "../utils/mock";
import Field from "../components/Field";
import QuestionMinimal from "../components/QuestionMinimal";

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
      <AddMetaToPages>
        <View style={styles.container}>
          <QuestionMinimal {...postMock} />
          <Field
            value={answerText}
            onChangeText={onAnswerChange}
            placeholder=""
            name="Write Your Answer"
            otherInputProps={{
              multiline: true,
              numberOfLines: 10,
            }}
          />
          <Button
            title="Add Answer"
            onPress={() => {}}
            color={constants.primaryColor}
          />
        </View>
      </AddMetaToPages>
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
