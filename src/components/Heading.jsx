export default function Heading({ text, padding = true }) {
  return (
    <div className={`flex items-center gap-2 ${padding ? "px-20" : ""}`}>
      <span className="flex w-[10px] h-[10px] min-h-[10px] min-w-[10px] rounded-full bg-ultraDark"></span>
      <h2 className="text-lg font-semibold">{text}</h2>
    </div>
  );
}
