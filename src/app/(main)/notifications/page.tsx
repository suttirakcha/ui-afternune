import NotificationList from "@/components/notifications/NotificationList";
import { getNotifications } from "@/services/notifications.service";

export default async function NotificationsPage() {
  const { data: notifications } = await getNotifications();
  return <NotificationList notifications={notifications} />;
}
