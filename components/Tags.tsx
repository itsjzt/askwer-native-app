import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import constants from "../utils/constants";

export interface Tag {
  name: string;
  uri: string;
}

export interface TagsProps {
  tags: Array<Tag>;
}

const Tags: React.SFC<TagsProps> = props => {
  const { tags } = props;

  return (
    <View style={styles.tags}>
      {tags.map((tag, index) => (
        <Text style={styles.tag} key={index}>{`#${tag.name}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tags: {
    flexDirection: "row",
    paddingTop: constants.lg,
    paddingBottom: constants.lg,
  },
  tag: {
    color: constants.darkGray,
    fontSize: constants.fontSmall,
    paddingRight: constants.sm,
    paddingLeft: constants.sm,
  },
});

export default Tags;
