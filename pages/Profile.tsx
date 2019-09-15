import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import constants from "../utils/constants";
import SecondaryButton from "../components/SecondaryButton";
import { NavigationScreenProps } from "react-navigation";
import { userMock } from "../utils/mock";
import FeedMinimal from "./FeedMinimal";
import { ScrollView } from "react-native-gesture-handler";

export interface ProfileProps extends NavigationScreenProps {}

const Profile: React.SFC<ProfileProps> = props => {
  const { navigation } = props;
  const goToEditProfile = () => {
    navigation.push("EditProfile");
  };

  return (
    <ScrollView>
      <View style={styles.profile}>
        <View style={styles.profileHeader}>
          <Image style={styles.avatar} source={userMock.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{userMock.name}</Text>
            <Text>{userMock.bio}</Text>
          </View>
        </View>
        <View style={styles.statistics}>
          <View style={styles.statistic}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statName}>Followers</Text>
          </View>
          <View style={styles.statistic}>
            <Text style={styles.statValue}>100</Text>
            <Text style={styles.statName}>Following</Text>
          </View>
          <View style={styles.statistic}>
            <Text style={styles.statValue}>20</Text>
            <Text style={styles.statName}>Answers</Text>
          </View>
          <View style={styles.statistic}>
            <Text style={styles.statValue}>13</Text>
            <Text style={styles.statName}>Questions</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <SecondaryButton onPress={goToEditProfile}>
            <Text>Edit Profile</Text>
          </SecondaryButton>
        </View>
        <View style={styles.questionAsked}>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <FeedMinimal key={index} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: constants.xl,
  },
  profileHeader: {
    flexDirection: "row",
    paddingTop: constants.md,
    paddingBottom: constants.md,
  },
  profileInfo: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    padding: constants.md,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  bio: {},
  name: {
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: constants.lg,
    paddingBottom: constants.lg,
  },
  statistics: {
    flexDirection: "row",
    paddingTop: constants.md,
    paddingBottom: constants.md,
  },
  statistic: {
    flex: 1,
  },
  statValue: {
    textAlign: "center",
    fontWeight: "600",
  },
  statName: {
    textAlign: "center",
    fontSize: constants.fontSmall,
  },
  questionAsked: {
    paddingTop: constants.md,
    paddingBottom: constants.md,
  },
});

export default Profile;
