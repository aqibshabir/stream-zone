"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Heart } from "lucide-react";

interface ActionsProps {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
}

export const Actions = ({
  hostIdentity,
  isFollowing,
  isHost,
}: ActionsProps) => {
  const { userId } = useAuth();

  return (
    <Button
      onClick={() => {}}
      variant="primary"
      size="sm"
      className="w-auto h-8 p-1.5 rounded-md"
    >
      <Heart
        className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")}
      />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
