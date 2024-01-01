import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-4 hover:opacity-70 transition "
    >
      <div className="bg-white rounded-full p-1 mr-20 shrink-0 lg:mr-0 lg:shrink">
        <Image src="/logo.svg" alt="logo" height="45" width="45" />
      </div>
      {/* <div className={cn("hidden lg:block", font.className)}>
        <p className="text-lg font-semibold">Stream Zone</p>
        <p className="text-xs text-muted-foreground">Stream now</p>
      </div> */}
    </Link>
  );
};
