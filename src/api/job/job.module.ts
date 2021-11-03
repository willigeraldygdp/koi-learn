import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import * as redisConfig from '../../config/redis.config.json';

import { JobProducerModule } from './producer/job.producer.module';
import { JobListenerModule } from './listener/job.listener.module';
import { JobConsumerModule } from './consumer/job.consumer.module';
import { JobResumerModule } from './resumer/job.resumer.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: redisConfig.host,
        port: redisConfig.port,
      },
    }),
    BullModule.registerQueue({
      name: 'new-job',
    }),
    JobListenerModule,
    JobConsumerModule,
    JobResumerModule,
    JobProducerModule,
  ],
  exports: [BullModule],
})
export class JobModule {}
