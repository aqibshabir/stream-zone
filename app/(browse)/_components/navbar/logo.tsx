import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  const filter =
    "brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(0%) hue-rotate(358deg) brightness(104%) contrast(108%)";
  return (
    <div className="mr-20 lg:mr-0">
      <Link href="/" className="flex items-center gap-x-4 transition ">
        <div className="rounded-full shrink-0 lg:shrink hover:bg-[#7c3bff]">
          <Image
            src="/logo.svg"
            alt="logo"
            height="60"
            width="60"
            style={{ filter: filter }}
          />
        </div>
      </Link>
    </div>
  );
};
