import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import * as redisConfig from '../../config/redis.config.json';

import { JobProducerController } from './producer/job.producer.controller';
import { JobResumerController } from './resumer/job.resumer.controller';

import { JobProducerService } from './producer/job.producer.service';
import { JobResumerService } from './resumer/job.resumer.service';
import { JobConsumer } from './consumer/job.consumer';
import { JobListener } from './listener/job.listener';

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
  ],
  controllers: [JobProducerController, JobResumerController],
  providers: [JobProducerService, JobResumerService, JobConsumer, JobListener],
  exports: [BullModule],
})
export class JobModule {}
