import * as React from "react";
import constants from "../utils/constants";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

export interface FieldProps {
  field: string;
  name: string;
  placeholder: string;
  setField: (field: string) => void;
  otherInputProps?: TextInputProps;
}

// Form Input Field
const Field: React.SFC<FieldProps> = props => {
  const { name, field, setField, placeholder, otherInputProps = {} } = props;

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        value={field}
        placeholder={placeholder}
        onChangeText={setField}
        style={styles.input}
        {...otherInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    paddingTop: constants.lg,
    paddingBottom: constants.lg,
  },
  label: {
    color: constants.darkerGray,
    marginBottom: constants.md,
    textTransform: "uppercase",
    fontSize: constants.lg - constants.sm - constants.xs,
    fontWeight: "600",
  },
  input: {
    fontSize: constants.lg,
    padding: constants.md,
    borderRadius: constants.md,
    borderColor: constants.lighterGray,
    borderWidth: 1,
    color: constants.darkerGray,
  },
});

export default Field;
