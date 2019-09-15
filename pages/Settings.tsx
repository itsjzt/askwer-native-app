import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../utils/constants";

export interface SettingsProps {}

const Settings: React.SFC<SettingsProps> = () => {
  return (
    <View style={styles.settings}>
      <TouchableOpacity>
        <Text>Dark Mode</Text>
        <Text>Use dark theme In the App</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Logout</Text>
      </TouchableOpacity>
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
