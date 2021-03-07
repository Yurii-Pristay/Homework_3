import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { EController } from './e.controller';
import { EService } from "./e.service";

@Module({
    imports: [DatabaseModule],
    providers: [EService],
    controllers: [EController]
})
export class EModule{}