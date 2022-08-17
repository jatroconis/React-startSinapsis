import { User } from 'src/domain/user';
import { UserDTO } from 'src/infrastucture/dto/user-dto';

export class AssemblerUser {
  dtoToDomain(userDto: UserDTO): User {
    const { userId, ...data } = userDto;
    return {
      id: userId,
      ...data,
    };
  }
  domainToDto(user: User): UserDTO {
    const { id, ...data } = user;
    return {
      userId: id,
      ...data,
    };
  }

  listDomainToListDto(users: User[]): UserDTO[] {
    return users.map((user) => {
      const { id, ...data } = user;
      return {
        userId: id,
        ...data,
      };
    });
  }
}
