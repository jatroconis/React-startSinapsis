import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Access } from './access';
import { Role } from './role';

@Entity('access_by_roles')
export class AccessByRole {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Role, (role) => role.id)
  role: Role[];
  @ManyToOne(() => Access, (access) => access.id)
  access: Access[];
}
