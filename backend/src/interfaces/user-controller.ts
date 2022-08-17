import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AssemblerUser } from 'src/application/assembler/user';
import { UserDTO } from 'src/infrastucture/dto/user-dto';
import { UserService } from 'src/services/user.service';
import { badRequest } from '../application/util/http-response';

@Controller('users')
@ApiTags('Users')
export class UserController {
  assemblerUser: AssemblerUser = new AssemblerUser();
  constructor(private _user: UserService) {}

  @Post()
  saveUser(@Body() userDto: UserDTO) {
    this._user.saveUser(this.assemblerUser.dtoToDomain(userDto));
    return;
  }

  @Get()
  async findAll() {
    return this.assemblerUser.listDomainToListDto(await this._user.findAll());
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    const user = this.assemblerUser.domainToDto(await this._user.findById(id));
    if (user) return user;
    throw new badRequest('Usuario no encontrado');
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    this._user.deleteById(id);
    return;
  }
}
