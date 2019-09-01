import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import constants from "../utils/constants";
import EmailField from "./EmailFIeld";
import PasswordField from "./PasswordField";
import { Component } from "react";
import RenderIf from "./RenderIf";
import NameField from "./NameField";

export interface AuthFormProps {
  submitHandler: (values: AuthFormState) => void;
  submitLabel: string;
  haveNameField?: boolean;
  googleHandler: (googleData: any) => void;
  prefill?: AuthFormState;
}

export interface AuthFormState {
  email: string;
  password: string;
  name?: string;
}

class AuthForm extends Component<AuthFormProps, AuthFormState> {
  state = { email: "", password: "", name: "" };

  componentDidUpdate(prevProps: AuthFormProps) {
    const { prefill } = this.props;
    if (prefill !== prevProps.prefill) {
      this.setState(prefill);
    }
  }

  onEmailTextChange = (value: string) => this.setState({ email: value });
  onPasswordTextChange = (value: string) => this.setState({ password: value });
  onNameTextChange = (value: string) => this.setState({ name: value });

  render() {
    const {
      haveNameField,
      submitHandler,
      submitLabel,
      googleHandler,
    } = this.props;
    const { email, name, password } = this.state;
    const { onEmailTextChange, onNameTextChange, onPasswordTextChange } = this;

    return (
      <View style={styles.authWrapper}>
        <View style={styles.auth}>
          <View style={styles.genericForm}>
            <RenderIf check={haveNameField}>
              <NameField value={name} onChangeText={onNameTextChange} />
            </RenderIf>
            <EmailField value={email} onChangeText={onEmailTextChange} />
            <PasswordField
              value={password}
              onChangeText={onPasswordTextChange}
            />
            <Button
              color={constants.primaryColor}
              onPress={() => submitHandler({ email, name, password })}
              title={submitLabel}
            />
          </View>
          <View style={styles.googleForm}>
            <Text style={styles.seperator}>OR</Text>
            <Button
              color={constants.googleRed}
              onPress={googleHandler}
              title="Continue With Google"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  authWrapper: {
    padding: constants.xl,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  auth: {
    flex: 1,
  },
  genericForm: {},
  googleForm: {},
  seperator: {
    marginTop: constants.lg,
    textAlign: "center",
    marginBottom: constants.lg,
  },
});

export default AuthForm;
