import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserDto } from './dto/userDto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('get/:id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post('create')
  createUser(@Body() userDto: UserDto) {
    const createUserDto: CreateUserDto = {
      name: userDto.name,
      age: userDto.age,
    };

    return this.userService.createUser(createUserDto);
  }

  @Put('update/:id')
  updateUser(@Param('id') id: number, @Body() userDto: UserDto) {
    const updateUserDto: UpdateUserDto = {
      id,
      name: userDto.name,
      age: userDto.age,
    };
    return this.userService.updateUser(updateUserDto);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
