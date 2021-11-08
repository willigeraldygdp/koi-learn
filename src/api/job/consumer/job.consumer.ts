import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('new-job')
export class JobConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      progress += 10;
      await job.progress(progress);
    }
    await new Promise((resolve) => setTimeout(resolve, 6000));
    return job.data;
  }
}
