import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import * as config from '../config/typeOrmConfig.json';

import { User } from '../api/user/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: config.db.host,
      port: config.db.port,
      username: config.db.username,
      password: config.db.password,
      database: config.db.database,
      entities: [User],
      synchronize: config.db.synchronize,
    };
  }
}
