import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

// TODO: 보여주기용 더미 데이터 — 실제 내용으로 교체 예정
const profile = {
  name: "정경호",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageSrc: "/profile.jpg",
};

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-12 px-6 pt-20 pb-16 sm:pt-28">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />
        <div className="absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/15" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl dark:bg-amber-900/15" />
      </div>
      <ProfileHeader {...profile} />
      <ul className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
