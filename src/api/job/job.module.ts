import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { JobProducerController } from './producer/job.producer.controller';
import { JobProducerService } from './producer/job.producer.service';
import { JobConsumer } from './consumer/job.consumer';
import { JobListener } from './listener/job.listener';
import { JobResumerController } from './resumer/job.resumer.controller';
import JobResumerService from './resumer/job.resumer.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'new-job',
    }),
  ],
  controllers: [JobProducerController, JobResumerController],
  providers: [JobProducerService, JobConsumer, JobListener, JobResumerService],
})
export class JobModule {}
