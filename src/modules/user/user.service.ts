import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  findOne(username: string): string {
    if (username === 'Kid') {
      return 'Kid is here';
    }
    return 'No one here';
  }
}
