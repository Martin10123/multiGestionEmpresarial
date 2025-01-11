import { CardNotificationReminder } from "./CardNotificationReminder";

export const Notifications = () => {
  return (
    <div className="max-h-[calc(100dvh-10rem)] overflow-auto">
      <div className="mt-4 grid gap-2 pr-2">
        <CardNotificationReminder />
        <CardNotificationReminder />
      </div>
    </div>
  );
};
