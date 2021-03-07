import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CCrudModule } from './c-crud/c-crud.module';

@Module({
  imports: [CCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
