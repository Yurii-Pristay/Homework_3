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
import { E } from './eCrud/e.entity';

@Module({
  imports: [EModule, DModule,CCrudModule, DatabaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:process.env.POSTGRES_HOST || 'localhost',
      port: 5432,
      username:process.env.POSTGRES_USERNAME || 'postgres',
      password:process.env.POSTGRES_PASSWORD || 'pgadmin2021',         
      database:process.env.POSTGRES_DATABASE || 'routesdb',
      entities:[RouteС, E],
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
