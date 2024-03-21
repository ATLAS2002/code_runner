import type { FC, ReactNode } from "react";

export type ExtendedFC<P = {}> = FC<
  Partial<{
    children: ReactNode;
    className: string;
  }> &
    P
>;

export type Action<IState, Type = string> = {
  type: Type;
  payload: Partial<IState>;
};
