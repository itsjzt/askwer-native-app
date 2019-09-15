import * as React from "react";
import Field, { FieldProps } from "./Field";
import constants from "../utils/constants";

export interface TextFieldProps extends FieldProps {
  numberOfLines?: number;
}

const TextField: React.SFC<TextFieldProps> = props => {
  const { numberOfLines = constants.md } = props;

  return (
    <Field
      {...props}
      otherInputProps={{
        numberOfLines,
        multiline: true,
        textAlignVertical: "top",
        ...props.otherInputProps,
      }}
    />
  );
};

export default TextField;
