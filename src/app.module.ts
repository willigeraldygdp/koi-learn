import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';

import { UserModule } from './api/user/user.module';
import { JobModule } from './api/job/job.module';

import { TypeOrmConfigService } from './db/typeOrmConfigService';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
    JobModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
