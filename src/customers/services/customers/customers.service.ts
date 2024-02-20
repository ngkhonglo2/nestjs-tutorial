import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'abc@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'bcd@gmail.com',
      createdAt: new Date(),
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}