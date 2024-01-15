import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "600", "700", "800"],
});

export const Logo = () => {
  const filter =
    "brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(0%) hue-rotate(358deg) brightness(104%) contrast(108%)";
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-[#7c3aed] rounded-full p-0.5 hover:bg-[#611fe5]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            height={120}
            width={120}
            style={{ filter: filter }}
          />
        </Link>
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">Stream Zone</p>
        <p className="text-sm text-muted-foreground">The Streaming Platform</p>
      </div>
    </div>
  );
};
