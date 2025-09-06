"use client";
import React from "react";
import {
  Sidebar as AnimatedSidebar,
  SidebarBody,
  SidebarLink,
} from "@/app/components/Animated-Sidebar";
import { IconUser } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { BellRing, Settings } from "lucide-react";
import { CommonTab } from "../components/Tabs/CommonTab";
import { LeetcodeTab } from "../components/Tabs/LeetcodeTab";
import { GithubTab } from "../components/Tabs/GithubTab";

export function Sidebar() {
  const links = [
    {
      label: "Profile",
      href: "#",
      icon: <IconUser className="h-5 w-5 shrink-0 text-neutral-700" />,
    },
    {
      label: "Jobs & Inquiries",
      href: "#jobs",
      icon: <BellRing className="h-5 w-5 shrink-0 text-neutral-700" />,
    },
    {
      label: "Settings",
      href: "#settings",
      icon: <Settings className="h-5 w-5 shrink-0 text-neutral-700" />,
    },
    {
      label: "Logout",
      href: "#logout",
      icon: (
        <svg
          className="h-5 w-5 shrink-0 text-neutral-700"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
          />
        </svg>
      ),
    },
  ];
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-white md:flex-row",
        "min-h-screen"
      )}
    >
      <AnimatedSidebar>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </AnimatedSidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img
        className="h-9 w-10 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm"
        src="/logos/logo.svg"
        alt=""
      />
      <span className="font-medium whitespace-pre text-black text-2xl">
        Crolit
      </span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black" />
    </a>
  );
};

const Dashboard = () => {
  type TabKey = "General" | "github" | "leetcode";

  const [active, setActive] = React.useState<TabKey>("General");

  return (
    <main className="flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="h-6" />
        <div className="flex items-center gap-3">
          <button
            aria-label="notifications"
            className="rounded-full border border-neutral-200 p-2 cursor-pointer"
          >
            <span className="sr-only">Notifications</span>
            <div className="relative">
              <BellRing className="text-neutral-400" height={20} width={20} />
            </div>
          </button>
          <button
            aria-label="settings"
            className="rounded-full border border-neutral-200 p-2 cursor-pointer"
          >
            <Settings className="text-neutral-400" height={20} width={20} />
          </button>
          <div className="h-[38px] w-[38px] rounded-full border border-neutral-200 overflow-hidden bg-neutral-200 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
              alt="Profile Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex-1 flex flex-col min-h-0">
        <div className="w-full max-w-md mx-auto px-2">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {(
              [
                { key: "General", label: "General" },
                { key: "github", label: "Github" },
                { key: "leetcode", label: "Leetcode" },
              ] as { key: TabKey; label: string }[]
            ).map((t) => {
              const isActive = active === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`rounded-lg border px-4 py-2 text-sm cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "border-neutral-900 bg-white shadow-sm"
                      : "border-neutral-200 bg-neutral-50"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <section className="mt-6 p-3 rounded-xl border border-neutral-200 bg-neutral-50 flex-1 min-h-0">
            {active === "General" && <CommonTab />}
            {active === "github" && <GithubTab />}
            {active === "leetcode" && <LeetcodeTab />}
          </section>
        </div>
      </div>
    </main>
  );
};
