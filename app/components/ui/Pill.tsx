type PillProps = {
  children: React.ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-sm">
      {children}
    </span>
  );
}
