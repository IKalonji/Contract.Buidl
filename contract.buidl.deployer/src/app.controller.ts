import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ComplieContractDTO } from './models/compile.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('compile')
  getContractCompile(@Body() compileContractBody: ComplieContractDTO) {
    return this.appService.getCompileContract(compileContractBody);
  }
}
