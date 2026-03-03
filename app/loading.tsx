export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111111]">
      <div className="flex flex-col items-center gap-8">
        {/* Pulsing Wordmark */}
        <span className="text-white font-sans font-bold tracking-tighter uppercase text-2xl md:text-3xl animate-pulse">
          CYPRESS & CO.
        </span>
        {/* Elegant Loading Track */}
        <div className="w-32 h-[1px] bg-white/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-white/60 w-1/3 animate-pulse" />
        </div>
      </div>
    </div>
  );
}