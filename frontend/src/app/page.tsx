"use client";
import { Editor } from "@/components/editor";
import { Io } from "@/components/io";
import { Tray } from "@/components/tray";
import { ConfigProvider } from "@/context/config-provider";
import { DataProvider } from "@/context/data-provider";

export default function Home() {
  return (
    <ConfigProvider>
      <DataProvider>
        <main className="min-h-[calc(100vh-80px)] flex flex-col gap-6 p-4 lg:px-24">
          <Tray />
          <Editor />
          <Io />
        </main>
      </DataProvider>
    </ConfigProvider>
  );
}
