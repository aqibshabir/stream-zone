import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "600", "700", "800"],
});

export const Logo = () => {
  const filter =
    "brightness(0) saturate(100%) invert(95%) sepia(5%) saturate(0%) hue-rotate(358deg) brightness(104%) contrast(108%)";
  return (
    <Link href="/" className="flex items-center gap-x-4  transition ">
      <div className="rounded-full p-0.25 mr-20 shrink-0 lg:mr-0 lg:shrink hover:bg-[#611FE5]">
        <Image
          src="/logo.svg"
          alt="logo"
          height="45"
          width="45"
          style={{ filter: filter }}
        />
      </div>
      {/* <div className={cn("hidden lg:block", font.className)}>
        <p className="text-lg font-semibold">Stream Zone</p>
        <p className="text-xs text-muted-foreground">Stream now</p>
      </div> */}
    </Link>
  );
};
