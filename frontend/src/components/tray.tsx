import { ExtendedFC } from "@/types";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";
import { ConfigActions, languages, themes } from "@/lib/constants";
import { useConfig } from "@/context/config-provider";
import { useData } from "@/context/data-provider";

export const Tray: ExtendedFC = () => {
  const { language, theme, changeConfig } = useConfig();
  const { code, stdin } = useData();

  return (
    <section className="h-8 md:h-10 flex justify-between">
      <div className="flex gap-1 md:gap-4 h-full">
        <Select
          defaultValue={language}
          onValueChange={(lang) =>
            changeConfig({ type: ConfigActions.language, payload: lang })
          }
        >
          <SelectTrigger className="w-28 md:w-40 bg-stone-100 text-stone-800 font-mono border-none focus:ring-0 rounded-lg shadow">
            <SelectValue className="text-black" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="font-mono">
              {Object.entries(languages).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          className="bg-stone-100 text-stone-800 hover:shadow-none hover:bg-stone-100 border-none focus:ring-0 rounded-lg shadow font-sans font-normal transition-all"
          onClick={() => {
            console.log({ code, stdin });
          }}
        >
          Run<pre className="hidden font-sans sm:block"> your code</pre>
        </Button>
      </div>
      <div>
        <Select
          defaultValue={theme}
          onValueChange={(theme) =>
            changeConfig({ type: ConfigActions.theme, payload: theme })
          }
        >
          <SelectTrigger className="w-28 sm:w-48 bg-stone-100 text-stone-800 font-mono border-none focus:ring-0 rounded-lg shadow">
            <SelectValue className="text-black" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="font-mono">
              {themes.map((theme) => (
                <SelectItem key={theme} value={theme}>
                  {theme}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};
