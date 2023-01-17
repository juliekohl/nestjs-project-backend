import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeEntity } from './attendee.entity';
import { AttendeesService } from './attendees.service';
import { EventEntity } from './event.entity';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { CurrentUserEventAttendanceController } from './current-user-event-attendance.controller';
import { EventAttendeesController } from './event-attendees.controller';
import { EventsOrganizedByUserController } from './events-organized-by-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, AttendeeEntity])],
  controllers: [
    EventsController,
    CurrentUserEventAttendanceController,
    EventAttendeesController,
    EventsOrganizedByUserController,
  ],
  providers: [EventsService, AttendeesService],
})
export class EventsModule {}
