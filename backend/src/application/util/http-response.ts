import { HttpException, HttpStatus } from '@nestjs/common';

export class badRequest extends HttpException {
  constructor(errorMessage: string = 'Se ha presentado un error') {
    super(errorMessage, HttpStatus.BAD_REQUEST);
  }
}
