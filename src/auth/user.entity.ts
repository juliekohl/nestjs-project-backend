import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventEntity } from '../events/event.entity';
import { Profile } from './profile.entity';
import { Expose } from 'class-transformer';
import { AttendeeEntity } from '../events/attendee.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({ unique: true })
  @Expose()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  @Expose()
  email: string;

  @Column()
  @Expose()
  firstName: string;

  @Column()
  @Expose()
  lastName: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  @Expose()
  profile: Profile;

  @OneToMany(() => EventEntity, (event) => event.organizer)
  @Expose()
  organized: EventEntity[];

  @OneToMany(() => AttendeeEntity, (attendee) => attendee.user)
  attended: AttendeeEntity[];
}
