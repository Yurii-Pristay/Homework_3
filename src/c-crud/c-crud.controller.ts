import { Controller, Get, Put, Post, Body, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { DbObject } from 'src/interfaces/DbObject';
import { CObject } from 'src/interfaces/CObj';
import { CCrudService } from './c-crud.service';
import { cCreateDto } from './cDto/cCreateDto.dto';
import { cUpdateDto } from './cDto/cUpdateDto.dto';
import { RouteС } from './routeС.entity';

@Controller('c')
export class CCrudController {
    constructor(private cService: CCrudService) { }

    @Get()
    findAll(): Promise<RouteС[]> {
        return this.cService.findAll();
    }
    // async get (): Promise<DbObject[]> {//type
    //     return await  this.cService.read();
    // }


    @Post()
    create(@Body() cObj: cCreateDto): Promise<RouteС> {
        return this.cService.create(cObj);

    }
    // async create (@Body() cObj:CObject): Promise<CObject>{//type
    //     return await this.cService.create(cObj);

    // }


    @Put(':id')
    update(@Param('id', ParseIntPipe) objId: number, @Body() cObj: cCreateDto): Promise<RouteС> {
        return this.cService.update(objId, cObj);
    }
    
    // async update(@Param('id', ParseIntPipe) objId: number, @Body() cObj:CObject): Promise<DbObject>{ // type
    //     return await this.cService.update(objId,cObj);
    // }
    

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) objId: number): Promise<void> {
        return this.cService.delete(objId);
    }
    // async delete (@Param('id', ParseIntPipe) objId: number): Promise<number>{
    //     return await this.cService.delete(objId);
    // }
    
}
