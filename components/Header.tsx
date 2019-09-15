import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import constants from "../utils/constants";
import SearchBar from "./SearchBar";

export interface HeaderProps {
  avatarOnPress: () => void;
  user: {
    avatar: { uri: string };
  };
}

const Header: React.FC<HeaderProps> = props => {
  const { avatarOnPress, user } = props;
  const { avatar } = user;

  return (
    <View style={styles.header}>
      <SearchBar />
      <TouchableOpacity
        onPress={avatarOnPress}
        style={styles.userAvatarWrapper}
      >
        <Image
          style={styles.userAvatar}
          source={{
            uri: avatar.uri,
          }}
        />
      </TouchableOpacity>
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
