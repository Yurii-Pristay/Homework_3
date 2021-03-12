import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DController } from './d.controller';
import { DService } from './d.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { D } from './d.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([D])],
  controllers: [DController],
  providers: [DService],
})
export class DModule {}
