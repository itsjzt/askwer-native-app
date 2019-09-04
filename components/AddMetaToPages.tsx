import * as React from "react";
import Header from "./Header";
import { userMock } from "../utils/mock";

export interface AddMetaToPagesProps {
  children: React.ReactNode;
}

const AddMetaToPages: React.SFC<AddMetaToPagesProps> = props => {
  const { children } = props;

  return (
    <>
      <Header user={userMock} />
      {children}
    </>
  );
};

export default AddMetaToPages;
