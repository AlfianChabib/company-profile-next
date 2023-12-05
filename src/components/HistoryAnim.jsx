export default function HistoryAnim({ item, index, setModal }) {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
      className="history-anim flex w-full lg:px-20 md:px-12 px-8 lg:py-6 md:py-4 py-2 hover:opacity-40 items-center justify-between border-t border-gray-300"
    >
      <h2 className="lg:text-6xl md:text-4xl text-2xl leading-10 font-normal m-0">
        {item.title}
      </h2>
      <p className="font-light text-xs md:text-sm">
        Digital Marketing Growth Partner
      </p>
    </div>
  );
}
