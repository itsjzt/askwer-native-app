import * as React from "react";
import { NavigationScreenProps } from "react-navigation";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { userMock } from "../utils/mock";
import Field from "../components/Field";
import constants from "../utils/constants";
import TextField from "../components/TextField";

export interface EditProfileProps extends NavigationScreenProps {}

export interface EditProfileState {}

const EditProfile: React.SFC<EditProfileProps> = () => {
  const [name, setName] = React.useState(userMock.name);
  const [email, setEmail] = React.useState(userMock.email);
  const [bio, setBio] = React.useState(userMock.bio);

  return (
    <View style={styles.EditProfile}>
      <Image style={styles.avatar} source={userMock.avatar} />
      <Field
        name="Name"
        placeholder="John Doe"
        value={name}
        onChangeText={setName}
      />
      <Field
        name="Email"
        placeholder="john@email.com"
        value={email}
        onChangeText={setEmail}
      />
      <TextField
        name="Bio"
        placeholder="Teacher at Takshshila University"
        value={bio}
        onChangeText={setBio}
        numberOfLines={constants.sm}
      />
      <Button title="Save" color={constants.primaryColor} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  EditProfile: {
    flex: 1,
    padding: constants.lg,
  },
  avatar: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
});

export default EditProfile;
