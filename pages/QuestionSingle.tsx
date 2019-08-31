import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

export interface QuestionSingleProps {}

const QuestionSingle: React.SFC<QuestionSingleProps> = () => {
  return (
    <View style={styles.container}>
      <Text>See componts for pre-made components</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default QuestionSingle;
