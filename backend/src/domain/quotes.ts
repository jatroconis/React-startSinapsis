import { Status } from 'src/application/util/status';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './customer';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'timestamp' })
  createdDate: Date;
  @Column({
    type: 'enum',
    enum: Status,
  })
  status: Status;
  @ManyToOne(() => Customer, (customer) => customer.id)
  @JoinColumn()
  customer: Customer;
}
