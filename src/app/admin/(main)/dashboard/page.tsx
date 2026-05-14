import DashboardTemplate from "@/components/admin/DashboardTemplate";
import { getCommunities } from "@/services/communities.service";
import { getPosts } from "@/services/posts.service";
import { getUsers } from "@/services/users.service";

export default async function AdminDashboardPage() {
  const users = await getUsers();
  const posts = await getPosts();
  const communities = await getCommunities();
  return (
    <DashboardTemplate users={users} posts={posts} communities={communities} />
  );
}
