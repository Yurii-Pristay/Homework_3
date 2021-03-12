import { Controller, Post, Put, Delete, Get, Param, Body, Query } from '@nestjs/common';
import { AService } from './aRoute.service';
import { aUpdateDto } from './dtoForA/update-aroute.dto';
import { aCreateDto } from './dtoForA/create-aroute.dto';
import { AObj } from "../interfaces/AObj";

@Controller('a')
export class AController {
    constructor(readonly aService: AService) {
    }

    @Post()
    POST( @Body() aCreateDto: aCreateDto ): Promise<AObj> {
        return  this.aService.POST( aCreateDto );
    }

    @Put(':id')
    PUT( @Param('id') id: number, @Body() aUpdateDto: aUpdateDto ): Promise<AObj> {
        return this.aService.PUT( id, aUpdateDto )
    };

    @Delete(':id')
    DELETE( @Param('id') id: number ): Promise<string> {
        return this.aService.DELETE( id );
    };


    @Get(':id' )
    GET( @Query('id') id: number ): Promise<AObj|AObj[]> {
        return this.aService.GET(id);
    }


}
