import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CCrudModule } from './c-crud/c-crud.module';
import { DModule } from './d/d.module';
import { EModule } from './eCrud/e.module';
import { AModule } from "./a-route/aRoute.module";
import { DatabaseModule } from './database/database.module';
import { RouteС } from './c-crud/routeС.entity';
import { D } from './d/d.entity';
import { E } from './eCrud/e.entity';

@Module({
  imports: [CCrudModule, DModule, EModule, DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'routesdb',
      entities: [RouteС, D, E],
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
