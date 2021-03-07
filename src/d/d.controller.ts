import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Body,
  Param,
} from '@nestjs/common';
import { DService } from './d.service';
import { CreateDDto } from './dto/create-d.dto';
import { UpdateDDto } from './dto/update-d.dto';
import { DObject } from '../interfaces/DObject';
import { ParseIntPipe } from '@nestjs/common';

@Controller('d')
export class DController {
  constructor(private readonly dService: DService) {}

  @Get()
  getAll(@Query('isPalindrome') isPalindrome: boolean): DObject[] {
    return this.dService.getAll(isPalindrome);
  }

  @Post()
  create(@Body() d: CreateDDto): DObject {
    return this.dService.create(d);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() d: UpdateDDto): object {
    return this.dService.update(id, d);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): object {
    return this.dService.remove(id);
  }
}
