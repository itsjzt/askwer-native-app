import * as React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import constants from "../utils/constants";
import { Ionicons } from "@expo/vector-icons";

export interface SearchBarProps {
  initialValue?: string;
}

const SearchBar: React.SFC<SearchBarProps> = props => {
  const { initialValue = "" } = props;
  const [search, setSearch] = React.useState(initialValue);

  return (
    <View style={[styles.padding, styles.searchWrapper]}>
      <Ionicons name="md-search" size={24} color={constants.darkerGray} />
      <TextInput
        style={styles.search}
        value={search}
        placeholder="Search"
        placeholderTextColor={constants.lightGray}
        onChangeText={text => setSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  padding: {
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
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: constants.sm,
    backgroundColor: constants.lighterGray,
  },
});

export default SearchBar;
