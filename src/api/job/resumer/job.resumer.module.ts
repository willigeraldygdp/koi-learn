import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { JobResumerController } from './job.resumer.controller';
import JobResumerService from './job.resumer.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'new-job',
    }),
  ],
  controllers: [JobResumerController],
  providers: [JobResumerService],
})
export class JobResumerModule {}
