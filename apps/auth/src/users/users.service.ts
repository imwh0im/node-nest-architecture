import { Injectable } from '@nestjs/common';
import { User } from 'apps/auth/src/interface/users';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'henry',
      password: 'qwer1234',
    },
    {
      userId: 2,
      username: 'hyeok jun',
      password: 'abcd1234',
    },
  ];

  public findAll(): User[] {
    return this.users;
  }

  public findOne(username: string, password: string): User | undefined {
    return this.users.find((user) => {
      return user.username === username && user.password === password;
    });
  }
}
