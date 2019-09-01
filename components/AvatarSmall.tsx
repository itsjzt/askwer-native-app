import * as React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../utils/constants";

export interface AvatarSmallProps {
  avatar: { uri: string };
  username: string;
}

const AvatarSmall: React.SFC<AvatarSmallProps> = props => {
  const { username, avatar } = props;

  return (
    <TouchableOpacity onPress={() => {}}>
      <Image style={styles.avatar} source={{ uri: avatar.uri }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: constants.xl,
    height: constants.xl,
    borderRadius: constants.xl,
  },
});

export default AvatarSmall;
