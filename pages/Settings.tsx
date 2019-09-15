import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import constants from "../utils/constants";

export interface SettingsProps {}

const Settings: React.SFC<SettingsProps> = () => {
  return (
    <View style={styles.settings}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    padding: constants.lg,
  },
});

export default Settings;
