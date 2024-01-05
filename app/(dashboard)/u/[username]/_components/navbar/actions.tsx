import { Clapperboard, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  currentUser,
} from "@clerk/nextjs";

import Link from "next/link";

export const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <Button>
        <Link href="/">
          <LogOut />
          Exit
        </Link>
      </Button>
    </div>
  );
};
