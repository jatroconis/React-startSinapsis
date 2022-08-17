import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Access } from 'src/domain/access';
import { AccessByRole } from 'src/domain/access-by-role';
import { BoxSession } from 'src/domain/box-session';
import { Customer } from 'src/domain/customer';
import { QuoteItems } from 'src/domain/quote-item';
import { Quote } from 'src/domain/quotes';
import { Role } from 'src/domain/role';
import { User } from 'src/domain/user';

const features = [
  User,
  Role,
  Access,
  Customer,
  BoxSession,
  AccessByRole,
  Quote,
  QuoteItems,
];

const Database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Queijueputa1.',
  database: 'inventory',
  entities: features,
  synchronize: true,
};

export { Database, features };
