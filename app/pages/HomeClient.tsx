"use client";
import Image from "next/image";
import React from "react";
import { Sidebar } from "@/app/components/Sidebar";
import { BellRing, Pill, Settings } from "lucide-react";
import { CommonTab } from "../components/Tabs/CommonTab";
import { LeetcodeTab } from "../components/Tabs/LeetcodeTab";
import { GithubTab } from "../components/Tabs/GithubTab";

type TabKey = "common" | "github" | "leetcode";

export default function HomeClient({}) {
  const [active, setActive] = React.useState<TabKey>("common");

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex flex-col sm:flex-row p-4 sm:p-6 gap-4 min-h-screen bg-white">
        <Sidebar />
      </div>
    </div>
  );
}
