type Props = {
  id: string;
  tag: string;
  hint: string;
  text: string;
  flaw?: string;
  kind?: "email" | "text";
  rows?: number;
  busy?: boolean;
  edit: (value: string) => void;
};

export function Field({ id, tag, hint, text, flaw, kind = "text", rows, busy = false, edit }: Props) {
  const tone = `w-full px-4 py-3 bg-brand-bg rounded-xl border transition-all text-sm outline-none ${
    flaw
      ? "border-red-400 focus:border-red-500"
      : "border-brand-dark/5 focus:border-brand-accent/50 focus:bg-white"
  }`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-brand-dark/60">
        {tag}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={hint}
          value={text}
          onChange={(event) => edit(event.target.value)}
          disabled={busy}
          className={`${tone} resize-none disabled:cursor-not-allowed disabled:opacity-60`}
        />
      ) : (
        <input
          id={id}
          type={kind}
          placeholder={hint}
          value={text}
          onChange={(event) => edit(event.target.value)}
          disabled={busy}
          className={`${tone} disabled:cursor-not-allowed disabled:opacity-60`}
        />
      )}
      {flaw ? <span className="text-[10px] font-mono text-red-500 font-semibold">{flaw}</span> : null}
    </div>
  );
}
