import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepostory = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepostory);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipent-id',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
