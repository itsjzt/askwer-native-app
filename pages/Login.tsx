import * as React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import constants from "../utils/constants";
import { NavigationContainerProps } from "react-navigation";
import Field from "../components/Field";

export interface LoginState {
  email: string;
  password: string;
}

export interface LoginProps extends NavigationContainerProps {}

export default class Login extends React.Component<LoginProps, LoginState> {
  state = { email: "", password: "" };

  login = () => {
    const { navigate } = this.props.navigation;
    navigate("Signup");
  };

  withGoogle = () => {
    const { navigate } = this.props.navigation;
    navigate("Signup");
  };

  setEmail = (email: string) => this.setState({ email });
  setPassword = (password: string) => this.setState({ password });

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.login}>
        <View style={styles.loginBox}>
          <View style={styles.genericLogin}>
            <Field
              field={email}
              setField={this.setEmail}
              name="Email"
              placeholder="john@example.com"
            />
            <Field
              field={password}
              setField={this.setPassword}
              name="Password"
              placeholder="******"
              otherInputProps={{ secureTextEntry: true }}
            />
            <Button
              color={constants.primaryColor}
              onPress={this.login}
              title="Login"
            />
          </View>
          <View style={styles.googleLogin}>
            <Text style={styles.seperator}>OR</Text>
            <Button
              color={constants.googleRed}
              onPress={this.withGoogle}
              title="Continue With Google"
            ></Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    padding: constants.xl,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    flex: 1,
  },
  genericLogin: {},
  googleLogin: {},
  seperator: {
    marginTop: constants.lg,
    textAlign: "center",
    marginBottom: constants.lg,
  },
});
