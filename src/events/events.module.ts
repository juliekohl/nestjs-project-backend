import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';
import { EventsController } from './events.controller';
import { AttendeeEntity } from './attendee.entity';
import { EventsService } from './events.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, AttendeeEntity])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
