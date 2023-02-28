import { Module } from '@nestjs/common';
import { IndexController } from 'src/controllers/index.controller';
import { IndexService } from './index.service';

@Module({
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
