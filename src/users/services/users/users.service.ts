import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'abdullah chaniago',
      email: 'notstated@gmail.com',
    },
    {
      username: 'samsul jadab',
      email: 'samsul@gmail.com',
    },
    {
      username: 'seriani guci',
      email: 'seriani@gmail.com',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType):CreateUserType {
    this.fakeUsers.push(userDetails);
    return
  }

  fetchUserById(id:number){
    return {id, username:"ac", age:20}
  }
}
