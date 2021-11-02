import { Module } from '@nestjs/common';

import { UserModule } from './api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import { User } from './api/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mypass',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
