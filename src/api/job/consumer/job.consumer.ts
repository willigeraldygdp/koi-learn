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
    await new Promise((resolve) => setTimeout(resolve, 10000));
    //console.log(job.data);
    return job.data;
  }

  // @OnQueueActive()
  // onActive(job: Job) {
  //   console.log(
  //     `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
  //   );
  // }
}
