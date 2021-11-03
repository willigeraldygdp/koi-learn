import { Module } from '@nestjs/common';
import { JobListener } from './job.listener';

@Module({
  providers: [JobListener],
})
export class JobListenerModule {}
