import { Clapperboard } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  currentUser,
} from "@clerk/nextjs";

import Link from "next/link";

export const Actions = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <>
          <SignInButton>
            <Button size="xs" variant="default" className="text-xs">
              Log in
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size="xs" variant="outline" className="text-xs">
              Sign up
            </Button>
          </SignUpButton>
        </>
      )}
      {!!user && (
        <div className="flex  items-center gap-x-4">
          <Button
            size="sm"
            variant="ghostPurple"
            className="text-white hover:text-primary h-8 p-2"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <div className="hover:opacity-80 transition">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
    </div>
  );
};
