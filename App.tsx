import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import { postMock, userMock } from "./utils/mock";
import constants from "./utils/constants";
import PostCardList from "./components/PostCardList";

export default function App() {
  const s = styles;

  return (
    <View style={s.app}>
      <Header user={userMock} />
      <View style={s.container}>
        <PostCardList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    display: "flex",
  },
  container: {
    flex: 1,
    padding: constants.md,
    backgroundColor: constants.white,
  },
});
