import { Module } from '@nestjs/common';
import { AController } from './aRoute.controller';
import { AService } from "./aRoute.service";
import { A } from './a.entity'
import { TypeOrmModule } from '@nestjs/typeorm';





@Module({
    imports:[TypeOrmModule.forFeature([A])],
    controllers: [AController],
    providers: [AService]
})

export class AModule {}
