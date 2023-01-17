import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendeeEntity } from './attendee.entity';
import { CreateAttendeeDto } from './input/create-attendee.dto';

@Injectable()
export class AttendeesService {
  constructor(
    @InjectRepository(AttendeeEntity)
    private readonly attendeeRepository: Repository<AttendeeEntity>,
  ) {}

  public async findByEventId(eventId: number): Promise<AttendeeEntity[]> {
    return await this.attendeeRepository.find({
      event: { id: eventId },
    });
  }

  public async findOneByEventIdAndUserId(
    eventId: number,
    userId: number,
  ): Promise<AttendeeEntity | undefined> {
    return await this.attendeeRepository.findOne({
      event: { id: eventId },
      user: { id: userId },
    });
  }

  public async createOrUpdate(
    input: CreateAttendeeDto,
    eventId: number,
    userId: number,
  ): Promise<AttendeeEntity> {
    const attendee =
      (await this.findOneByEventIdAndUserId(eventId, userId)) ??
      new AttendeeEntity();

    attendee.eventId = eventId;
    attendee.userId = userId;
    attendee.answer = input.answer;

    return await this.attendeeRepository.save(attendee);
  }
}
