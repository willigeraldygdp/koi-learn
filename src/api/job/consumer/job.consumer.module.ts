import { Module } from '@nestjs/common';
import { JobConsumer } from './job.consumer';

@Module({
  providers: [JobConsumer],
})
export class JobConsumerModule {}
