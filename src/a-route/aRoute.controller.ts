import { Controller, Post, Put, Delete, Get, Param, Body, Query } from '@nestjs/common';
import { AService } from './aRoute.service';
import { aUpdateDto } from './dtoForA/update-aroute.dto';
import { aCreateDto } from './dtoForA/create-aroute.dto';
import { AObj } from "../interfaces/AObj";



@Controller('a')
export class AController {
    constructor(readonly aService: AService) {
    }

    // @Post()
    // POST(@Body() aCreateDto:aCreateDto): AObj {
    //     return this.aService.POST(aCreateDto);
    // }

    // @Put(':id')
    // PUT(@Param('id') id:number, @Body() aUpdateDto:aUpdateDto): string|object {
    //     return this.aService.PUT(id, aUpdateDto)
    // };

    // @Delete(':id')
    // DELETE(@Param('id') id:number): string {
    //     return this.aService.DELETE(id)
    // };


    // @Get()
    // GET(@Query('id') id:number):AObj[] {
    //     return this.aService.GET(id);

    // }


}