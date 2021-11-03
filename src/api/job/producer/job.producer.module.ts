import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { JobProducerController } from './job.producer.controller';
import { JobProducerService } from './job.producer.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'new-job',
    }),
  ],
  controllers: [JobProducerController],
  providers: [JobProducerService],
})
export class JobProducerModule {}
