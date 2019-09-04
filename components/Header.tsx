import * as React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import constants from "../utils/constants";
import SearchBar from "./SearchBar";

export interface HeaderProps {
  user: {
    avatar: { uri: string };
  };
}

const Header: React.FC<HeaderProps> = props => {
  const { avatar } = props.user;

  return (
    <View style={styles.header}>
      <SearchBar />
      <View style={styles.userAvatarWrapper}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: avatar.uri,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: constants.md,
    borderBottomColor: constants.lighterGray,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatarWrapper: {
    paddingLeft: constants.md,
  },
  text: {
    fontSize: constants.lg,
    color: constants.darkerGray,
    fontWeight: "600",
  },
  userAvatar: {
    borderRadius: constants.xl,
    width: constants.xl,
    height: constants.xl,
  },
});

export default Header;
