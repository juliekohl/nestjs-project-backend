import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttendeeEntity } from './attendee.entity';
import { User } from '../auth/user.entity';
import { Expose } from 'class-transformer';
import { PaginationResult } from '../pagination/paginator';

@Entity()
export class EventEntity {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  description: string;

  @Column()
  @Expose()
  when: Date;

  @Column()
  @Expose()
  address: string;

  @OneToMany(() => AttendeeEntity, (attendee) => attendee.event, {
    cascade: true,
  })
  @Expose()
  attendees: AttendeeEntity[];

  @ManyToOne(() => User, (user) => user.organized)
  @JoinColumn({ name: 'organizerId' })
  @Expose()
  organizer: User;

  @Column({ nullable: true })
  organizerId: number;

  @Expose()
  attendeeCount?: number;
  @Expose()
  attendeeRejected?: number;
  @Expose()
  attendeeMaybe?: number;
  @Expose()
  attendeeAccepted?: number;
}

export type PaginatedEvents = PaginationResult<EventEntity>;
