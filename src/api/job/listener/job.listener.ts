import {
  Processor,
  OnQueueActive,
  OnQueueCompleted,
  OnQueuePaused,
  OnQueueResumed,
} from '@nestjs/bull';
import { Job } from 'bull';

@Processor('new-job')
export class JobListener {
  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with name ${job.data.name}...`,
    );
  }

  @OnQueueCompleted()
  onComplete(job: Job) {
    console.log(
      `Done job ${job.id} of type ${job.name} with name ${job.data.name}...`,
    );
  }

  @OnQueuePaused()
  onPaused() {
    console.log('Queue Paused');
  }

  @OnQueueResumed()
  onResumed() {
    console.log('Queue Resumed');
  }
}
