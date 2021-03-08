import { Module } from '@nestjs/common';
import { CCrudController } from './c-crud.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CCrudService } from './c-crud.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CCrudController],
  providers: [CCrudService]
})
export class CCrudModule {}
