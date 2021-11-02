import { Controller, Post } from '@nestjs/common';
import JobResumerService from './job.resumer.service';

@Controller('job')
export class JobResumerController {
  constructor(private readonly jobResumerService: JobResumerService) {}

  @Post('pause')
  pauseQueue() {
    return this.jobResumerService.pauseQueue();
  }

  @Post('resume')
  resumeQueue() {
    return this.jobResumerService.resumeQueue();
  }
}
