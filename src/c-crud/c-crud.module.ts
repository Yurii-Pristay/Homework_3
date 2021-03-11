import { Module } from '@nestjs/common';
import { CCrudController } from './c-crud.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CCrudService } from './c-crud.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RouteС} from './routeС.entity';

@Module({
  imports: [DatabaseModule,TypeOrmModule.forFeature([RouteС])],
  controllers: [CCrudController],
  providers: [CCrudService]
})
export class CCrudModule {}
