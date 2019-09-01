import * as React from "react";
import Field from "./Field";

export interface PasswordFieldProps {
  value: string;
  onChangeText: (values: string) => void;
}

const PasswordField: React.SFC<PasswordFieldProps> = props => {
  const { value, onChangeText } = props;

  return (
    <Field
      value={value}
      onChangeText={onChangeText}
      name="Password"
      placeholder="******"
      otherInputProps={{
        secureTextEntry: true,
        textContentType: "password",
      }}
    />
  );
};

export default PasswordField;
