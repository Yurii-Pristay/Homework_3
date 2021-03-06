import { Module } from '@nestjs/common';
import { EController } from './e.controller';
import { EService } from "./e.service";

@Module({
    providers: [EService],
    controllers: [EController]
})
export class EModule{}