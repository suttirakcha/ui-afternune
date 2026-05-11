"use client";

import { Community } from "@/types/communities.type";

interface CommunityCardProps {
  community: Community[];
}

export default function CommunityCard({ community }: CommunityCardProps) {
  return <div>CommunityCard</div>;
}
