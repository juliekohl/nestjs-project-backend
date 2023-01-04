import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendeeEntity } from './attendee.entity';

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
}
