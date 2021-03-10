import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { EController } from './e.controller';
import { E } from './e.entity';
import { EService } from "./e.service";

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([E])],
    providers: [EService],
    controllers: [EController]
})
export class EModule{}