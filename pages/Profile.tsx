import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import constants from "../utils/constants";
import SecondaryButton from "../components/SecondaryButton";
import { NavigationScreenProps } from "react-navigation";
import { userMock } from "../utils/mock";

export interface ProfileProps extends NavigationScreenProps {}

const Profile: React.SFC<ProfileProps> = props => {
  const { navigation } = props;
  const goToEditProfile = () => {
    navigation.push("EditProfile");
  };

  return (
    <View style={styles.profile}>
      <Text style={styles.name}>{userMock.name}</Text>
      <Text>{userMock.bio}</Text>
      <SecondaryButton onPress={goToEditProfile}>
        <Text>Edit Profile</Text>
      </SecondaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: constants.xl,
  },
  bio: {
    fontSize: constants.fontSmall,
  },
  name: {
    fontWeight: "600",
    fontSize: constants.fontSmall,
  },
});

export default Profile;
