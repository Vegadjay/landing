
export function Pill({ children }: { children: React.ReactNode }) {
    return (
      <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs">
        {children}
      </span>
    );
  }
  