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
      //url: 'postgres://yitlizsstnirrj:b6b05cdb2992521ad8422dc65981905df22f7eaeb3913187c46293077b63d416@ec2-3-217-219-146.compute-1.amazonaws.com:5432/d22a970h6gmbj2',
      type: 'postgres',
      host:process.env.POSTGRES_HOST  ||'localhost' , //localhost
      port: 5432,
      username:process.env.POSTGRES_USERNAME  || 'postgres' , //'postgres'
      password:process.env.POSTGRES_PASSWORD  || 'pgadmin2021' ,//'pgadmin2021',         
      database:process.env.POSTGRES_DATABASE  ||'routesdb', // 'routesdb',
      entities:[RouteС, E],
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
