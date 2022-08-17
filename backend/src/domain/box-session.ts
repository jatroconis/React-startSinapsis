import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user';

@Entity('box_sessions')
export class BoxSession {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'timestamp' })
  loginDate: Date;
  @Column({ type: 'timestamp' })
  logOutDate: Date;
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
