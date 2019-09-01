import * as React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export interface LoginProps {}

export interface LoginState {}

export default class Login extends React.Component<LoginProps, LoginState> {
  state = { email: "", password: "" };
  login = () => {};
  public render() {
    return (
      <View>
        <TextInput />
        <TextInput />
        <Button onPress={this.login} title="Login" />
      </View>
    );
  }
}
