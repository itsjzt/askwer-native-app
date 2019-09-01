import * as React from "react";
import { Text, TextProps, StyleProp, TextStyle } from "react-native";
import { formatDistanceToNow } from "date-fns/esm";

export interface TimeFromNowProps extends TextProps {
  time: Date;
}

const TimeFromNow: React.SFC<TimeFromNowProps> = props => {
  const { time } = props;
  return <Text {...props}>{formatDistanceToNow(time)} ago</Text>;
};

export default TimeFromNow;
