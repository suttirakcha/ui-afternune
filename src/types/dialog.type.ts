import { Community } from "@/types/communities.type";
import { Post } from "@/types/posts.type";
import { ReportType } from "@/types/report.type";
import { User } from "@/types/users.type";

export interface DialogOpenProps {
  open: boolean;
  onOpenChange: ({ open }: { open: boolean }) => void;
}

export interface BlockUserDialogProps extends DialogOpenProps {
  user: User;
  isBlocked: boolean;
}

export interface PostDialogProps extends DialogOpenProps {
  post: Post;
}

export interface CommunityDialogProps extends DialogOpenProps {
  community: Community;
}

export interface ReportDialogProps extends DialogOpenProps {
  data_id: string;
  type: ReportType;
}

export interface ProfileDialogProps extends DialogOpenProps {
  profile: User;
}
