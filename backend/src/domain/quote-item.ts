import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quote } from './quotes';

@Entity('quote_items')
export class QuoteItems {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  quantity: number;
  //product: Product
  @ManyToOne(() => Quote, (quote) => quote.id)
  @JoinColumn()
  quote: Quote;
}
