import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  firstName: string;
  @Column({ length: 100 })
  lastName: string;
  @Column({ length: 100, nullable: false })
  email: string;
  @Column({ length: 100, nullable: false })
  password: string;
}
