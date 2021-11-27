import { Injectable } from '@nestjs/common';
import { UsersService } from 'apps/auth/src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userSerivce: UsersService) {}

  public validateUser(username: string, password: string) {
    const user = this.userSerivce.findOne(username, password);
  }
}
