import { Status } from 'src/application/util/status';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, nullable: false })
  name: string;
  @Column({ length: 100 })
  phone: string;
  @Column({ length: 100 })
  numberId: string;
  @Column({ length: 100 })
  address: string;
  @Column({ length: 20 })
  nature: string;
  @Column({
    type: 'enum',
    enum: Status,
  })
  status: Status;
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
