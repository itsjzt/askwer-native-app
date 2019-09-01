import * as React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import constants from "../utils/constants";

export interface HeaderProps {
  user: {
    avatarUri: string;
  };
}

const Header: React.FC<HeaderProps> = props => {
  const [seach, setSearch] = React.useState("");
  const s = styles;
  const { avatarUri } = props.user;

  return (
    <View style={s.header}>
      <View style={[s.headerItem, s.textWrapper]}>
        <Text style={s.text}>Ask.er</Text>
      </View>
      <View style={[s.headerItem, s.searchWrapper]}>
        <Ionicons name="md-search" size={24} color={constants.darkerGray} />
        <TextInput
          style={s.search}
          value={seach}
          placeholder="Search"
          placeholderTextColor={constants.lightGray}
          onChangeText={text => setSearch(text)}
        />
      </View>
      <View style={[s.headerItem]}>
        <Ionicons
          name="md-notifications"
          size={24}
          color={constants.darkerGray}
        />
      </View>
      <View style={[s.headerItem]}>
        <Image
          style={s.userAvatar}
          source={{
            uri: avatarUri,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: constants.xl + constants.md,
    borderBottomColor: constants.lighterGray,
    borderBottomWidth: 1,
    paddingLeft: constants.lg,
    paddingBottom: constants.md,
    paddingRight: constants.lg,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerItem: {
    paddingLeft: constants.md,
    paddingRight: constants.md,
  },
  search: {
    padding: constants.xs,
    // there is icon on left
    paddingLeft: constants.md,
    flex: 1,
    color: constants.darkerGray,
  },
  searchWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: constants.sm,
    backgroundColor: constants.lighterGray,
  },
  textWrapper: {
    display: "flex",
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
