"use client";

import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";

import { useViewerToken } from "@/hooks/use-viewer-token";

interface StreamPlayerProps {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  user,
  stream,
  isFollowing,
}: StreamPlayerProps) => {
  const { token, name, identity } = useViewerToken(user.id);

  //   console.log({ token, name, identity });

  if (!token || !name || !identity) {
    return <div>Cannot watch the stream</div>;
  }

  return (
    <>
      <LiveKitRoom token={token} serverUrl={process.env.LIVEKIT_API_WS_URL}>
        Stream
      </LiveKitRoom>
    </>
  );
};
