"use client";
import Image from "next/image";
import React from "react";
import { Main } from "@/app/components/Main";

type TabKey = "common" | "github" | "leetcode";

export default function HomeClient({}) {
  const [active, setActive] = React.useState<TabKey>("common");

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex flex-col sm:flex-row p-4 sm:p-6 gap-4 min-h-screen bg-white">
        <Main />
      </div>
    </div>
  );
}
