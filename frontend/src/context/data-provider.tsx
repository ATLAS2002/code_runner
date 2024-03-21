import { createContext, useContext, useReducer, type Reducer } from "react";
import { DataActions, codeSnippets } from "@/lib/constants";
import type { Action, ExtendedFC } from "@/types";

interface IData {
  code: string;
  stdin: string;
}

const initialData = {
  code: codeSnippets.javascript,
  stdin: "",
} satisfies IData;

interface IDataContext extends IData {
  updateData: (action: Action<string, DataActions>) => void;
}

const DataContext = createContext<IDataContext | null>(null);

const reducer: Reducer<IData, Action<string, DataActions>> = (
  state,
  action
) => {
  switch (action.type) {
    case DataActions.code:
      return {
        ...state,
        code: action.payload,
      };
    case DataActions.stdin:
      return {
        ...state,
        stdin: action.payload,
      };
    default:
      return state;
  }
};

export const DataProvider: ExtendedFC = ({ children }) => {
  const [data, updateData] = useReducer(reducer, initialData);

  return (
    <DataContext.Provider
      value={{
        ...data,
        updateData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): IDataContext => {
  return useContext(DataContext) ?? { ...initialData, updateData: () => {} };
};
