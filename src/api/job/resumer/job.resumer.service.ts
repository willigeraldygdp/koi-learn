import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class JobResumerService {
  constructor(@InjectQueue('new-job') private readonly newJobQueue: Queue) {}

  async pauseQueue() {
    await this.newJobQueue.pause();
    return 'Queue paused';
  }

  async resumeQueue() {
    await this.newJobQueue.resume();
    return 'Queue resume';
  }
}
