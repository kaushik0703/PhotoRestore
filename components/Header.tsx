import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/restore.png"
          className="sm:w-14 sm:h-14 w-9 h-9"
          width={36}
          height={36}
        />
        <h1 className="sm:text-5xl text-3xl font-bold ml-2 tracking-tight">
          RestoreMemories
        </h1>
      </Link>
      <a
        href="https://github.com/kaushik0703/PhotoRestore.git"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/netlify.svg"
          className="sm:w-10 sm:h-[54px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a>
    </header>
  );
}
