
export function SectionCard({
    children,
    title,
    actionLabel,
  }: {
    children: React.ReactNode;
    title: string;
    actionLabel?: string;
  }) {
    return (
      <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs">
            {actionLabel ?? "Edit"}
          </button>
        </div>
        {children}
      </div>
    );
  }