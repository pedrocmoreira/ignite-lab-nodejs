import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { PrismaService } from '../prisma.service';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notifications-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
