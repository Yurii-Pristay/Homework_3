import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DService } from './d.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { D } from './d.entity';
import { DResolver } from './d.resolver';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([D])],
  providers: [DService, DResolver],
})
export class DModule {}
