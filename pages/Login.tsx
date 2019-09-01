import * as React from "react";
import { NavigationContainerProps } from "react-navigation";
import AuthForm, { AuthFormState } from "../components/AuthForm";

export interface LoginState {}

export interface LoginProps extends NavigationContainerProps {}

export default class Login extends React.Component<LoginProps, LoginState> {
  submitHandler = (values: AuthFormState) => {
    console.log(values);
    const { navigate } = this.props.navigation;
    navigate("Signup");
  };

  googleHandler = () => {
    const { navigate } = this.props.navigation;
    navigate("Signup");
  };

  render() {
    const { submitHandler, googleHandler } = this;
    return (
      <AuthForm
        googleHandler={googleHandler}
        haveNameField={false}
        submitHandler={submitHandler}
        submitLabel="Login"
      />
    );
  }
}
