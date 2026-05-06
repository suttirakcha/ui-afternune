import AfnButton from "@/components/custom/AfnButton";

interface FollowButtonProps {
  isAlreadyFollowed?: boolean;
}

export default function FollowButton({ isAlreadyFollowed }: FollowButtonProps) {
  return (
    <AfnButton
      px={6}
      fontSize={"16px"}
      // onClick={handleFollow}
      disabled={isAlreadyFollowed}
    >
      {isAlreadyFollowed ? "Following" : "Follow"}
    </AfnButton>
  );
}
