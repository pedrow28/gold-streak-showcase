type Props = { current: number; total: number };

export function SlideCounter({ current, total }: Props) {
  const fmt = (n: number) => n.toString().padStart(2, "0");
  return (
    <div
      className="absolute bottom-8 right-10 font-body text-text-subtle tracking-[0.1em]"
      style={{ fontSize: 13 }}
    >
      {fmt(current)} / {fmt(total)}
    </div>
  );
}
