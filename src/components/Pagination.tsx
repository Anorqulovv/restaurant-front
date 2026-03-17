const Pagination = ({ current, total, onChange }: { current: number; total: number; onChange: (p: number) => void }) => {
    const pages = Array.from({ length: total }, (_, i) => i + 1);
    const visiblePages = pages.slice(0, 4);
    const hasMore = total > 4;

    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            {visiblePages.map((p) => (
                <button key={p} onClick={() => onChange(p)} className={`w-10 h-10 rounded-full border text-sm font-semibold transition-all duration-200 cursor-pointer ${current === p ? "bg-white/60 border-black/60 text-black shadow-md" : "bg-transparent border-black/20 text-black/60 hover:bg-white/40"}`}>
                    {p}
                </button>
            ))}
            {hasMore && (
                <span className="w-10 h-10 flex items-center justify-center text-black/40 text-sm">...</span>
            )}
            <button onClick={() => onChange(Math.min(current + 1, total))} disabled={current === total} className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black/60 hover:bg-white/40 transition-all duration-200 disabled:opacity-30 cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
        </div>
    );
}

export default Pagination