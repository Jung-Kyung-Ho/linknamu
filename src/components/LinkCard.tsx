type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/45 px-16 py-[1.125rem] text-center text-[15px] font-medium tracking-tight text-stone-700 shadow-[0_6px_24px_-10px_rgba(140,80,45,0.25)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_30px_-10px_rgba(140,80,45,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-200 dark:shadow-[0_6px_24px_-10px_rgba(0,0,0,0.5)] dark:hover:bg-white/[0.1]"
    >
      {title}
      {/* 제목이 가운데에 유지되도록 클릭 수는 오른쪽에 띄워 둡니다 */}
      <span className="absolute top-1/2 right-6 -translate-y-1/2 text-xs font-normal tabular-nums text-stone-400 dark:text-stone-500">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
