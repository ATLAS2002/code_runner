import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

import { useData } from "@/context/data-provider";
import { useConfig } from "@/context/config-provider";
import { DataActions, languages, themes } from "@/lib/constants";

Object.keys(languages).forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

export const Editor = () => {
  const { code, updateData } = useData();
  const { theme, language } = useConfig();

  return (
    <AceEditor
      defaultValue={code}
      mode={language}
      theme={theme}
      name="editor"
      editorProps={{ $blockScrolling: true }}
      onChange={(code) => updateData({ type: DataActions.code, payload: code })}
      fontSize={16}
      width="100%"
      height="500px"
      className="rounded-lg p-4 shadow-lg"
    />
  );
};
