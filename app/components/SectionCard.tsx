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
        <div className="flex-1">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="w-10 h-0.5 bg-neutral-200 mt-1" />
        </div>
        <button className="rounded-full border cursor-pointer border-neutral-200 px-3 py-1.5 text-sm">
          {actionLabel ?? "Edit"}
        </button>
      </div>
      {children}
    </div>
  );
}
