import { Controller, Get, Render } from '@nestjs/common';
import { IndexService } from 'src/index/index.service';

@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  @Render('index')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  showLogin() {}
}
