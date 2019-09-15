import * as React from "react";
import { NavigationScreenProps } from "react-navigation";
import { StyleSheet, View, Text } from "react-native";

export interface NotificationProps extends NavigationScreenProps {}

const Notification: React.SFC<NotificationProps> = () => {
  return (
    <View style={styles.notification}>
      <Text>No New Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Notification;
