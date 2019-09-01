import * as React from "react";
import Field from "./Field";

export interface NameFieldProps {
  value: string;
  onChangeText: (name: string) => void;
}

const NameField: React.SFC<NameFieldProps> = props => {
  const { value, onChangeText } = props;

  return (
    <Field
      value={value}
      onChangeText={onChangeText}
      name="Name"
      placeholder="John Doe"
    />
  );
};

export default NameField;
