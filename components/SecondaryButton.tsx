import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import constants from "../utils/constants";

export interface SecondaryButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const SecondaryButton: React.SFC<SecondaryButtonProps> = props => {
  const { children, onPress, style = {} } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[styles.action, style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  action: {
    marginLeft: constants.md,
    marginRight: constants.md,
    alignSelf: "center",
    borderRadius: constants.sm,
    padding: constants.md,
    backgroundColor: constants.lighterGray,
  },
});

export default SecondaryButton;
