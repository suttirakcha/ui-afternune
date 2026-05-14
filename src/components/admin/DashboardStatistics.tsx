"use client";

import DashboardStatisticsCard from "@/components/admin/DashboardStatisticsCard";
import { Community } from "@/types/communities.type";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import { Grid } from "@chakra-ui/react";

interface DashboardStatisticsProps {
  users: User[];
  posts: Post[];
  communities: Community[];
}

export default function DashboardStatistics({
  users,
  posts,
  communities,
}: DashboardStatisticsProps) {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
      <DashboardStatisticsCard title="Total users" count={users?.length} />
      <DashboardStatisticsCard title="Total posts" count={posts?.length} />
      <DashboardStatisticsCard
        title="Total communities"
        count={communities?.length}
      />
    </Grid>
  );
}
