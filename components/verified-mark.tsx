import { BadgeCheck } from "lucide-react";
import { HiMiniCheckBadge } from "react-icons/hi2";

export const VerifiedMark = () => {
  return (
    <div className="flex items-center justify-center rounded-full">
      <HiMiniCheckBadge style={{ color: "#7c3aed" }} />
    </div>
  );
};
