import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

export interface SignupProps {}

export interface SignupState {}

export default class Signup extends React.Component<SignupProps, SignupState> {
  state = {};

  public render() {
    return (
      <View>
        <Text>Signup Component</Text>
      </View>
    );
  }
}
