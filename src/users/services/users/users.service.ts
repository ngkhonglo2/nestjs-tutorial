import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/Types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      userName: 'A',
      password: 'aaaa',
    },
    {
      userName: 'B',
      password: 'bbbb',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUserName(userName: string) {
    return this.users.find((user) => user.userName === userName);
  }
}
