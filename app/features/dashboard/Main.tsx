"use client";
import React from "react";
import { BellRing, Settings } from "lucide-react";
import { CommonTab } from "@/app/components/Tabs/CommonTab";
import { GithubTab } from "@/app/components/Tabs/GithubTab";
import { LeetcodeTab } from "@/app/components/Tabs/LeetcodeTab";

export function Main() {
  return <Dashboard />;
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
      <span className=" whitespace-pre text-black text-3xl font-extrabold">
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

type TabKey = "common" | "github" | "leetcode";

const Dashboard = () => {
  const [active, setActive] = React.useState<TabKey>("common");
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const profileMenuRef = React.useRef<HTMLDivElement | null>(null);
  const notificationRef = React.useRef<HTMLDivElement | null>(null);

  // Close notification popup when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isNotificationOpen &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
    }
    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  return (
    <main className="flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between p-4 bg-white">
        <Logo />
        <div className="flex items-center gap-3">
          <div className="relative" ref={notificationRef}>
            <button
              aria-label="notifications"
              className="rounded-full border border-neutral-200 p-2 cursor-pointer"
              onClick={() => setIsNotificationOpen((v) => !v)}
            >
              <span className="sr-only">Notifications</span>
              <div className="relative">
                <BellRing className="text-neutral-400" height={20} width={20} />
              </div>
            </button>
            {isNotificationOpen ? (
              <div
                className="absolute right-0 mt-2 w-64 rounded-lg border border-neutral-200 bg-white shadow-lg p-4 z-50"
                style={{ minWidth: "220px" }}
              >
                <div className="flex flex-col items-center justify-center py-4">
                  <span className="text-neutral-500 text-base font-medium mb-2">
                    No notifications
                  </span>
                  <span className="text-neutral-400 text-sm">
                    You're all caught up!
                  </span>
                </div>
              </div>
            ) : null}
          </div>
          <button
            aria-label="settings"
            className="rounded-full border border-neutral-200 p-2 cursor-pointer"
          >
            <Settings className="text-neutral-400" height={20} width={20} />
          </button>
          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              aria-label="profile-menu"
              aria-haspopup="menu"
              aria-expanded={isProfileMenuOpen}
              onClick={() => setIsProfileMenuOpen((v) => !v)}
              className="h-[38px] w-[38px] rounded-full border border-neutral-200 overflow-hidden bg-neutral-200 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
                alt="Profile Image"
                className="h-full w-full object-cover"
              />
            </button>
            {isProfileMenuOpen ? (
              <div
                role="menu"
                aria-orientation="vertical"
                className="absolute right-0 mt-2 w-44 rounded-lg border border-neutral-200 bg-white shadow-lg p-1 z-50"
              >
                {/* Logout */}
                <button
                  role="menuitem"
                  className="w-full text-left cursor-pointer px-3 py-2 rounded-md hover:bg-red-50 text-base text-red-600"
                >
                  Logout
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-6 flex-1 flex flex-col min-h-0 p-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
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
                className={`rounded-lg border px-4 py-2 text-base cursor-pointer whitespace-nowrap ${
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
          {active === "common" && <CommonTab />}
          {active === "github" && <GithubTab />}
          {active === "leetcode" && <LeetcodeTab />}
        </section>
      </div>
    </main>
  );
};
