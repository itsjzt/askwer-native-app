import * as React from "react";

export interface RenderIfProps {
  check: any;
}

const RenderIf: React.SFC<RenderIfProps> = ({ children, check }) => {
  return Boolean(check) ? <>{children}</> : null;
};

export default RenderIf;
