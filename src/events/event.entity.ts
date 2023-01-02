import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AttendeeEntity } from './attendee.entity';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  when: Date;
  @Column()
  address: string;
  @OneToMany(() => AttendeeEntity, (attendee) => attendee.event, {
    cascade: true,
  })
  attendees: AttendeeEntity[];
  attendeeCount?: number;
  attendeeRejected?: number;
  attendeeMaybe?: number;
  attendeeAccepted?: number;
}
