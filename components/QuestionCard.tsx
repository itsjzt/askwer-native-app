import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import RenderIf from "./RenderIf";
import constants from "../utils/constants";
import { formatDistanceToNow } from "date-fns";

export interface PostCardProps {
  imageUri: string;
  heading: string;
  author: {
    name: string;
    avatarUri: string;
  };
  createdAt: Date;
  tags: Array<string>;
}

const PostCard: React.SFC<PostCardProps> = props => {
  const s = styles;
  const { heading, imageUri, author, createdAt, tags } = props;

  return (
    <View style={s.postCard}>
      <RenderIf check={imageUri}>
        <View>
          <Image
            source={{
              uri: imageUri,
              height: 150,
            }}
          />
        </View>
      </RenderIf>
      <View style={s.cardBody}>
        <Text style={s.cardHeading}>{heading}</Text>
        <View style={s.postInfo}>
          <Image
            style={s.userAvatar}
            source={{
              uri: author.avatarUri,
            }}
          />
          <View style={s.tagsAndInfo}>
            <View style={s.metaInfo}>
              <Text style={[s.mutedText, s.usersName]}>{author.name}</Text>
              <Text style={s.spacing}>&middot;</Text>
              <Text style={[s.mutedText, s.postedTime]}>
                {formatDistanceToNow(createdAt)}
              </Text>
            </View>
            <View style={s.tags}>
              {tags.map((tag, index) => (
                <Text style={s.tagName} key={index}>{`#${tag}`}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: constants.white,
    display: "flex",
    borderColor: constants.lightGray,
    borderWidth: 1,
    flex: 1,
  },
  cardBody: {
    padding: constants.lg,
  },
  cardHeading: {
    color: constants.darkerGray,
    fontSize: constants.lg,
    fontWeight: "600",
  },
  postInfo: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    paddingTop: constants.md,
  },
  metaInfo: {
    display: "flex",
    flex: 1,
    paddingLeft: constants.lg,
    flexDirection: "row",
  },
  userAvatar: {
    height: constants.xl,
    width: constants.xl,
    borderRadius: constants.xl,
  },
  tagsAndInfo: {
    display: "flex",
  },
  mutedText: {
    color: constants.darkGray,
    fontSize: constants.lg - constants.sm,
  },
  usersName: {
    fontWeight: "600",
  },
  postedTime: {},
  spacing: {
    paddingLeft: constants.sm,
    paddingRight: constants.sm,
  },
  tags: {
    display: "flex",
    flexDirection: "row",
  },
  tagName: {
    color: constants.darkGray,
    fontSize: constants.lg - constants.sm,
    paddingRight: constants.sm,
    paddingLeft: constants.sm,
  },
});

export default PostCard;
