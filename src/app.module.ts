import { Module } from '@nestjs/common';

import { UserModule } from './api/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';

import { TypeOrmConfigService } from './db/typeOrmConfigService';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
