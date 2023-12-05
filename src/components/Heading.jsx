export default function Heading({ text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex w-[10px] h-[10px] min-h-[10px] min-w-[10px] rounded-full bg-ultraDark"></span>
      <h2 className="lg:text-lg md:text-base text-sm  font-semibold">{text}</h2>
    </div>
  );
}
