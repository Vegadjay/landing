import Image from "next/image";
import React from "react";

export const Sidebar = () => {
  return (
    <aside className="col-span-12 sm:col-span-3 lg:col-span-2 h-full">
      <div className="sticky top-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm h-full flex flex-col">
        <div className="flex items-center gap-2">
          <Image src="/logos/logo.svg" width={28} height={28} alt="Crolit" />
          <span className="font-semibold">Crolit</span>
        </div>
        <nav className="mt-6 flex-1 flex flex-col">
          <button className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-left text-sm font-medium">
            Profile
          </button>
        </nav>
      </div>
    </aside>
  );
};
