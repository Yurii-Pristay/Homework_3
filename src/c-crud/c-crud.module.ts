import { Module } from '@nestjs/common';
import { CCrudController } from './c-crud.controller';
import { CCrudService } from './c-crud.service';

@Module({
  controllers: [CCrudController],
  providers: [CCrudService]
})
export class CCrudModule {}
