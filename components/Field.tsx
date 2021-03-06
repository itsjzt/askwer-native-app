import * as React from "react";
import constants from "../utils/constants";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";

export interface FieldProps {
  value: string;
  name: string;
  placeholder: string;
  onChangeText: (field: string) => void;
  style?: StyleProp<TextStyle>;
  otherInputProps?: TextInputProps;
}

// Form Input Field
const Field: React.SFC<FieldProps> = props => {
  const {
    name,
    value,
    onChangeText,
    placeholder,
    style = {},
    otherInputProps = {},
  } = props;

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.input, style]}
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
    color: constants.darkGray,
    marginBottom: constants.md,
    textTransform: "uppercase",
    fontSize: constants.fontSmallest,
    fontWeight: "600",
  },
  input: {
    fontSize: constants.lg,
    padding: constants.md,
    borderRadius: constants.sm,
    backgroundColor: constants.lightestGray,
    color: constants.darkerGray,
  },
});

export default Field;
