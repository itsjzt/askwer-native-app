import React, { Component } from "react";
import { NavigationContainerProps } from "react-navigation";
import { StyleSheet, View, Text, Button } from "react-native";
import constants from "../utils/constants";
import Field from "../components/Field";

export interface AddQuestionProps extends NavigationContainerProps {}

export interface AddQuestionState {
  heading: string;
  description: string;
  tags: string;
}

class AddQuestion extends Component<AddQuestionProps, AddQuestionState> {
  state = { heading: "", description: "", tags: "" };

  onDescriptionChange = (description: string) => {
    this.setState({ description });
  };

  onHeadingChange = (heading: string) => {
    this.setState({ heading });
  };

  onTagsChange = (tags: string) => {
    this.setState({ tags });
  };

  render() {
    const { heading, description, tags } = this.state;
    const { onHeadingChange, onDescriptionChange, onTagsChange } = this;

    return (
      <View style={styles.container}>
        <Field
          value={heading}
          onChangeText={onHeadingChange}
          placeholder="What can I calculate value of PI?"
          name="Question"
          otherInputProps={{
            multiline: true,
            maxLength: 72,
            autoFocus: true,
          }}
        />
        <Field
          name="Description"
          placeholder="How these supercomputers do find the value of PI "
          value={description}
          onChangeText={onDescriptionChange}
          otherInputProps={{
            multiline: true,
            numberOfLines: 10,
          }}
        />
        <Field
          name="Tags"
          placeholder="math, computer, PI"
          value={tags}
          onChangeText={onTagsChange}
        />
        <Text style={styles.tagsMsg}>
          Seperate tags by comman and don't include hashtag
        </Text>
        <Button
          color={constants.primaryColor}
          title="Add Question"
          onPress={() => {}}
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
  tagsMsg: {
    color: constants.darkGray,
    fontSize: constants.fontSmall,
    marginBottom: constants.xl,
  },
});

export default AddQuestion;
