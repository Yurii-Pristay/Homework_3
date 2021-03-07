import { Controller, Get, Put,Post, Body, Delete, Param, ParseIntPipe} from '@nestjs/common';
import {CCrudService} from './c-crud.service';
import {cCreateDto} from './cDto/cCreateDto.dto';
import {cUpdateDto} from './cDto/cUpdateDto.dto';

@Controller('c')// c
export class CCrudController {
    constructor(private cService: CCrudService) {}

    @Get()
    async get () {
        return await  this.cService.read();
    }

    @Post()
    async create (@Body() cObj:cCreateDto){
        return await this.cService.create(cObj);

    }

    @Put()
    async update(@Param('objId', ParseIntPipe) objId: number, @Body() cObj:cUpdateDto){
        return await this.cService.update(objId,cObj);
    }

    @Delete(':id') 
    async delete (@Param('id', ParseIntPipe) objId: number){
        return await this.cService.delete(objId);
    }
}
