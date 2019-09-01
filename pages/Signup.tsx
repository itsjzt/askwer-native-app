import * as React from "react";
import { NavigationContainerProps } from "react-navigation";
import AuthForm, { AuthFormState } from "../components/AuthForm";

export interface SignupProps extends NavigationContainerProps {}

export interface SignupState {}

export default class Signup extends React.Component<SignupProps, SignupState> {
  submitHandler = (values: AuthFormState) => {
    console.log(values);
    const { navigate } = this.props.navigation;
    navigate("Login");
  };

  googleHandler = () => {
    const { navigate } = this.props.navigation;
    navigate("Login");
  };

  render() {
    const { submitHandler, googleHandler } = this;
    return (
      <AuthForm
        googleHandler={googleHandler}
        haveNameField={true}
        submitHandler={submitHandler}
        submitLabel="Sign up"
      />
    );
  }
}
