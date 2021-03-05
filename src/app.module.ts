import { EModule } from './eCrud/e.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
