import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-12px_rgba(140,80,45,0.35),0_2px_6px_rgba(140,80,45,0.08)] ring-1 ring-white/80 dark:bg-white/10 dark:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.6)] dark:ring-white/10">
        <Image
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          preload
          className="h-28 w-28 rounded-full object-cover"
        />
      </div>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </header>
  );
}
