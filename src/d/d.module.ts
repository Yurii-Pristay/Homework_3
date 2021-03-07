import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DController } from './d.controller';
import { DService } from './d.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DController],
  providers: [DService],
})
export class DModule {}
