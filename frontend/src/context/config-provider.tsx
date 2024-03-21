import { createContext, useContext, useReducer, type Reducer } from "react";
import type { Action, ExtendedFC } from "@/types";
import { ConfigActions, languages } from "@/lib/constants";

interface IConfig {
  theme: string;
  language: keyof typeof languages;
}

const initialConfig = {
  theme: "monokai",
  language: "javascript",
} satisfies IConfig;

interface IConfigContext extends IConfig {
  changeConfig: (action: Action<string, ConfigActions>) => void;
}

const ConfigContext = createContext<IConfigContext | null>(null);

const reducer: Reducer<IConfig, Action<string, ConfigActions>> = (
  state,
  action
) => {
  switch (action.type) {
    case ConfigActions.theme:
      return {
        ...state,
        theme: action.payload,
      };
    case ConfigActions.language:
      return {
        ...state,
        language: action.payload as keyof typeof languages,
      };
    default:
      return state;
  }
};

export const ConfigProvider: ExtendedFC = ({ children }) => {
  const [config, changeConfig] = useReducer(reducer, initialConfig);

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        changeConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = (): IConfigContext => {
  return (
    useContext(ConfigContext) ?? { ...initialConfig, changeConfig: () => {} }
  );
};
