import { Injectable } from '@nestjs/common';
import { Job, Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { JobProducerDto } from '../dto/jobProducerDto';

@Injectable()
export class JobProducerService {
  constructor(@InjectQueue('new-job') private newJobQueue: Queue) {}

  async postNewJob(jobProducerDto: JobProducerDto) {
    if (jobProducerDto.toString() === '{}') {
      console.log('No job body');
      return;
    }
    const jobPriority = {
      priority: jobProducerDto.priority ?? 4,
    };
    const job: Job = await this.newJobQueue.add(jobProducerDto, jobPriority);
    return job;
  }
}
