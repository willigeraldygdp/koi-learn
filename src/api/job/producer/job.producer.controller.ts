import { Body, Controller, Post } from '@nestjs/common';
import { JobProducerDto } from '../dto/jobProducerDto';
import { JobProducerService } from './job.producer.service';

@Controller('job')
export class JobProducerController {
  constructor(private readonly jobProducerService: JobProducerService) {}

  @Post('post')
  postNewJob(@Body() jobProducerDto: JobProducerDto) {
    return this.jobProducerService.postNewJob(jobProducerDto);
  }
}
