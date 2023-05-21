import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UsersRepository } from './users.repository';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  // Get user by id
  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  // Get all users
  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // Create user
  async createUser({ email, age }: CreateUserDto): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(),
      email,
      age,
      favoriteFoods: [],
    });
  }

  // Update user
  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
