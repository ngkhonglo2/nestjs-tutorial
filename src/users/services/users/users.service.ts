import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/Types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      userName: 'A',
      password: 'aaaa',
    },
    {
      id: 2,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
