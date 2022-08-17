import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users.map((user) => {
      const { password, ...data } = user;
      return {
        password: '',
        ...data,
      };
    });
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    const { password, ...data } = user;
    return {
      password: '',
      ...data,
    };
  }

  saveUser(user: User): void {
    this.userRepository.save(user);
  }

  deleteById(id: number): void {
    this.userRepository.delete(id);
  }
}
