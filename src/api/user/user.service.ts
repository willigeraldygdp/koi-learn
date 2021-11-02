import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserDto } from './dto/userDto';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getAllUser() {
    return await this.usersRepository.find();
  }

  async getUserById(id: number) {
    return await this.usersRepository.findOne(id);
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    const id = updateUserDto.id;

    const userDto: UserDto = {
      name: updateUserDto.name,
      age: updateUserDto.age,
    };

    userDto.name = updateUserDto.name;
    userDto.age - updateUserDto.age;

    await this.usersRepository.update(id, userDto);
    return await this.usersRepository.findOne(id);
  }

  async deleteUser(id: number) {
    const message = 'Deleted user with id ' + id;

    await this.usersRepository.delete(id);

    return message;
  }
}
