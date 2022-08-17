import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('access')
export class Access {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, nullable: false })
  name: string;
  @Column({ length: 20 })
  icon: string;
  @Column({ length: 50, nullable: false })
  path: string;
}
