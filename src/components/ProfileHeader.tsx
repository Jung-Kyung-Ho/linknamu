import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border border-zinc-200 object-cover dark:border-zinc-700"
      />
      <h1 className="mt-2 text-xl font-bold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
