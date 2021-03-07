import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CCrudModule } from './c-crud/c-crud.module';
import { DModule } from './d/d.module';
import { EModule } from './eCrud/e.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [EModule, DModule,CCrudModule, DatabaseModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
