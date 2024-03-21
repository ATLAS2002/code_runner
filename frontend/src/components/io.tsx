import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";
import { useData } from "@/context/data-provider";
import { DataActions } from "@/lib/constants";
import type { ExtendedFC } from "@/types";

export const Io: ExtendedFC = () => {
  const { updateData } = useData();

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50} minSize={30}>
        <Textarea
          className="bg-stone-800 h-full text-white p-4 border-none outline-none ring-0"
          onChange={({ target: { value } }) =>
            updateData({ type: DataActions.stdin, payload: value })
          }
        />
      </ResizablePanel>
      <ResizableHandle className="mx-1" />
      <ResizablePanel defaultSize={50} minSize={30}>
        <Textarea
          className="bg-stone-800 h-full disabled:opacity-100 disabled:cursor-text text-white p-4 border-none outline-none ring-0"
          disabled
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
