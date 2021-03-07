import { DbObject } from './../interfaces/DbObject';
import { CreateEDto } from './dto/create-e.dto';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { UpdateEDto } from './dto/update-e.dto';
import { EService } from './e.service';

@Controller('e')
export class EController {
    constructor(private readonly eService: EService) {
    }


    @Get()
    get(@Query('percentage') percentage: boolean): DbObject[] | string {
        return this.eService.get(percentage)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createE: CreateEDto): DbObject {  
        return this.eService.create(createE)
    }

    @Put(':id') 
    update(@Body() updateE: UpdateEDto, @Param('id', ParseIntPipe) id: number): DbObject {
        return this.eService.update(updateE,id)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): string {
        return this.eService.delete(id)
    }

}