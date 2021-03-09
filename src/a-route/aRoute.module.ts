import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AController } from './aRoute.controller';
import { AService } from "./aRoute.service";



@Module({
    imports:[DatabaseModule],
    controllers: [AController],
    providers: [AService]
})

export class AModule {}
