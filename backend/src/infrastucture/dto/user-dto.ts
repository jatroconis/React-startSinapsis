import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
