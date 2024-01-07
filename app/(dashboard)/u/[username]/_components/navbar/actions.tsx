import Link from "next/link";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-4">
      <Button
        size="sm"
        variant="ghostPurple"
        className="text-muted-primary hover:text-primary"
        asChild
      >
        <Link href="/">
          <LogOut className="h-5 w-5 lg:mr-2" />
          <span className="hidden lg:block">Exit</span>
        </Link>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
