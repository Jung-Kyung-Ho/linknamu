import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

// TODO: 보여주기용 더미 데이터 — 실제 내용으로 교체 예정
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com/" },
  { title: "LinkedIn", url: "https://www.linkedin.com/" },
  { title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-4 py-12">
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
