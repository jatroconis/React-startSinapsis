import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssemblerUser } from 'src/application/assembler/user';
import { badRequest } from 'src/application/util/http-response';
import { UserDTO } from 'src/infrastucture/dto/user-dto';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  assemblerUser: AssemblerUser = new AssemblerUser();
  constructor(private _auth: AuthService) {}

  @Post()
  async login(@Body() userDto: UserDTO) {
    const session = await this._auth.login(
      this.assemblerUser.dtoToDomain(userDto),
    );
    if (session) return session;
    throw new badRequest('Usuario y/o password invalidos');
  }
}
