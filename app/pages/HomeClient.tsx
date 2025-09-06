"use client";
import Image from "next/image";
import React from "react";
import { Sidebar } from "@/app/components/Sidebar";
import { BellRing, Pill, Settings } from "lucide-react";
import { CommonTab } from "../components/Tabs/CommonTab";
import { LeetcodeTab } from "../components/Tabs/LeetcodeTab";
import { GithubTab } from "../components/Tabs/GithubTab";

type TabKey = "common" | "github" | "leetcode";

export interface ReferenceImage {
  src: string;
  alt: string;
}

export default function HomeClient({
  referenceImages,
}: {
  referenceImages: ReferenceImage[];
}) {
  const [active, setActive] = React.useState<TabKey>("common");

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="grid grid-cols-12 gap-4 p-4 sm:p-6">
        <Sidebar />

        <main className="col-span-12 sm:col-span-9 lg:col-span-10">
          <div className="flex items-center justify-between p-4 bg-white">
            <div className="h-6" />
            <div className="flex items-center gap-3">
              <button
                aria-label="notifications"
                className="rounded-full border border-neutral-200 p-2 cursor-pointer hover:bg-neutral-50 transition-colors"
              >
                <span className="sr-only">Notifications</span>
                <div className="relative">
                  <BellRing
                    className="text-neutral-400"
                    height={20}
                    width={20}
                  />
                </div>
              </button>
              <button
                aria-label="settings"
                className="rounded-full border border-neutral-200 p-2 cursor-pointer hover:bg-neutral-50 transition-colors"
              >
                <Settings className="text-neutral-400" height={20} width={20} />
              </button>
              <div className="h-[38px] w-[38px] rounded-full border border-neutral-200 overflow-hidden bg-neutral-200 cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
                  alt="Profile Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex gap-2">
              {(
                [
                  { key: "common", label: "Common" },
                  { key: "github", label: "Github" },
                  { key: "leetcode", label: "Leetcode" },
                ] as { key: TabKey; label: string }[]
              ).map((t) => {
                const isActive = active === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`rounded-lg border px-4 py-2 text-sm transition cursor-pointer ${
                      isActive
                        ? "border-neutral-900 bg-white shadow-sm"
                        : "border-neutral-200 bg-neutral-50 hover:bg-white"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <section className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:p-6">
              {active === "common" && <CommonTab />}
              {active === "github" && <GithubTab />}
              {active === "leetcode" && <LeetcodeTab />}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
