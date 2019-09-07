import * as React from "react";
import Header from "./Header";
import { userMock } from "../utils/mock";
import TabBar, { TabBarProps } from "./TabBar";

export interface AddMetaToPagesProps extends TabBarProps {
  children: React.ReactNode;
}

const AddMetaToPages: React.SFC<AddMetaToPagesProps> = props => {
  const { children, ...rest } = props;

  return (
    <>
      <Header user={userMock} />
      {children}
      <TabBar {...rest} />
    </>
  );
};

export default AddMetaToPages;
