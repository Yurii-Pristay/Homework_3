import { Controller, Get, Put,Post, Body, Delete, Param, ParseIntPipe} from '@nestjs/common';
import { DbObject } from 'src/interfaces/DbObject';
import { CObject } from 'src/interfaces/CObj';
import {CCrudService} from './c-crud.service';
import {cCreateDto} from './cDto/cCreateDto.dto';
import {cUpdateDto} from './cDto/cUpdateDto.dto';

@Controller('c')
export class CCrudController {
    constructor(private cService: CCrudService) {}

    @Get()
    async get (): Promise<DbObject[]> {//type
        return await  this.cService.read();
    }

    @Post()
    async create (@Body() cObj:CObject): Promise<CObject>{//type
        return await this.cService.create(cObj);

    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) objId: number, @Body() cObj:CObject): Promise<DbObject>{ // type
        return await this.cService.update(objId,cObj);
    }

    @Delete(':id') 
    async delete (@Param('id', ParseIntPipe) objId: number): Promise<number>{
        return await this.cService.delete(objId);
    }
}
