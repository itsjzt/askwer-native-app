import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { postMock } from "../utils/mock";
import QuestionView from "./QuestionView";
import constants from "../utils/constants";

export interface PostCardListProps {}

const PostCardList: React.SFC<PostCardListProps> = () => {
  const s = styles;

  return (
    <FlatList
      data={Array(50).fill(postMock)}
      renderItem={payload => (
        <View style={s.cardWrapper}>
          <QuestionView {...payload.item} />
        </View>
      )}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    paddingTop: constants.md,
    paddingBottom: constants.md,
  },
});

export default PostCardList;
