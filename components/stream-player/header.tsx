"use client";
import { UserIcon } from "lucide-react";
import { VerifiedMark } from "@/components/verified-mark";
import {
  useParticipants,
  useRemoteParticipant,
} from "@livekit/components-react";

import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar, UserAvatarSkeleton } from "@/components/user-avatar";
import { Actions, ActionsSkeleton } from "./actions";

interface HeaderProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  imageUrl: string;
  isFollowing: boolean;
  name: string;
}

export const Header = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  imageUrl,
  isFollowing,
  name,
}: HeaderProps) => {
  const particpants = useParticipants();
  const particpant = useRemoteParticipant(hostIdentity);

  const isLive = !!particpant;
  const particpantCount = particpants.length - 1;

  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  return (
    <div className="flex lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
      <div className="flex items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size="lg"
          isLive={isLive}
          showBadge
        />
        <div className="space-y-1">
          <div className="flex items-center gap-x-1">
            <h2 className="text-lg font-semibold capitalize">{hostName}</h2>
            <VerifiedMark />
          </div>
          <div className="flex gap-x-1">
            <p className="text-sm font-semibold">{name}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Actions
          isFollowing={isFollowing}
          hostIdentity={hostIdentity}
          isHost={isHost}
        />
        {isLive ? (
          <div className="font-semibold flex justify-end mt-2 gap-x-0.5 items-center text-xs text-rose-400">
            <UserIcon className="h-4 w-4" />
            <p>
              {particpantCount}
              {/* {particpantCount === 1 ? "viewer" : "viewers"} */}
            </p>
          </div>
        ) : (
          <p className="font-semibold text-xs text-muted-foreground flex justify-end mt-2">
            Offline
          </p>
        )}
      </div>
    </div>
  );
};

export const HeaderSkeleton = () => {
  return (
    <div className="flex lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
      <div className="flex items-center gap-x-3">
        <UserAvatarSkeleton size="lg" />
        <div className="space-y-1">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <div className="flex flex-col">
        <ActionsSkeleton />
        <div className="flex justify-end mt-2 items-center">
          <Skeleton className="h-4 w-10" />
        </div>
      </div>
    </div>
  );
};
