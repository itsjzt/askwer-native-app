import * as React from "react";
import Field from "./Field";

export interface EmailFieldProps {
  value: string;
  onChangeText: (value: string) => void;
}

const EmailField: React.SFC<EmailFieldProps> = props => {
  const { value, onChangeText } = props;

  return (
    <Field
      value={value}
      onChangeText={onChangeText}
      name="Email"
      placeholder="john@example.com"
    />
  );
};

export default EmailField;
