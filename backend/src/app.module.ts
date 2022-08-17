import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database, features } from './configuration/db';
import { AuthController } from './interfaces/auth-controller';
import { UserController } from './interfaces/user-controller';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(Database),
    TypeOrmModule.forFeature(features),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService],
})
export class AppModule {}
