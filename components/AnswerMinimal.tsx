import * as React from "react";
import AnswerAuthor from "./AnswerAuthor";
import { Text } from "react-native";

export interface AnswerMinimalProps {
  author: {
    name: string;
    username: string;
    avatar: {
      uri: string;
    };
  };
  answer: string;
  createdAt: Date;
}

const AnswerMinimal: React.SFC<AnswerMinimalProps> = props => {
  const { answer, author, createdAt } = props;
  const answerShort = answer
    .split(" ")
    .splice(0, 30)
    .join(" ");

  return (
    <>
      <AnswerAuthor {...author} createdAt={createdAt} />
      {/* todo: we need a box shadow here, white-ish */}
      <Text>{answerShort}...</Text>
    </>
  );
};

export default AnswerMinimal;
