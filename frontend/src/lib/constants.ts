export enum ConfigActions {
  theme = "CHANGE_THEME",
  language = "CHANGE_LANGUAGE",
}

export enum DataActions {
  code = "CHANGE_CODE",
  stdin = "CHANGE_INPUT",
}

export const languages = {
  c_cpp: "C++",
  java: "Java",
  python: "Python",
  javascript: "Javascript",
};

export const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
];

export const codeSnippets: Record<keyof typeof languages, string> = {
  c_cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n\t// your code goes here\n\treturn 0;\n}`,
  java: `class Main {\n\tpublic static void main(String[] args) {\n\t\t// your code goes here\n\t}\n}`,
  python: `# your code goes here`,
  javascript: `// your code goes here`,
};
