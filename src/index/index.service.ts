import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexService {
  findAll() {
    return `This action returns all index`;
  }

  findOne(id: number) {
    return `This action returns a #${id} index`;
  }

  remove(id: number) {
    return `This action removes a #${id} index`;
  }
}
