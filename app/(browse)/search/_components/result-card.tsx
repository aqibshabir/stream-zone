import Link from "next/link";
import { Stream, User } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";

import { Skeleton } from "@/components/ui/skeleton";
import { Thumbnail, ThumbnailSkeleton } from "@/components/thumbnail";
import { VerifiedMark } from "@/components/verified-mark";

interface ResultCardProps {
  data: Stream & { user: User };
}

export const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="w-full flex gap-x-4">
        <div className="relative h-[9rem] w-[16rem]">
          <Thumbnail
            src={data.thumbnailUrl}
            fallback={data.user.imageUrl}
            isLive={data.isLive}
            username={data.user.username}
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold text-xl cursor-pointer hover:text-[#6c23ff] hover:underline">
              {data.user.username}
            </p>
            <VerifiedMark />
          </div>
          <p className="text-md text-muted-foreground">{data.name}</p>
          <p className="text-xs text-muted-foreground">
            <span>Last live </span>
            {formatDistanceToNow(new Date(data.updatedAt), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const ResultCardSkeleton = () => {
  return (
    <div className="w-full flex gap-x-4">
      <div className="relative h-[9rem] w-[16rem]">
        <ThumbnailSkeleton />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </div>
  );
};
