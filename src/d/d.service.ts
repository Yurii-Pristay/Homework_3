import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { D } from './d.entity';
import { DObject } from '../interfaces/DObject';
import { UpdateDDto } from './dto/update-d.dto';
import { CreateDDto } from './dto/create-d.dto';
import { isCamelCase, camelToSnake, isPalindrome } from './utils';

@Injectable()
export class DService {
  constructor(@InjectRepository(D) private dRepo: Repository<D>) {}

  async getAll(isPalindromeQuery: boolean): Promise<DObject[]> {
    const dArray = await this.dRepo.find();
    // unable to import ParseBoolPipe due to:
    // "Module '"../../node_modules/@nestjs/common"'
    // has no exported member 'ParseBoolPipe'".
    if (isPalindromeQuery && isPalindromeQuery.toString() === 'true') {
      const dArrayPalindrome = dArray.map(item => {
        (item as DObject).isPalindrome = isPalindrome(item.d);
        return item;
      });

      return dArrayPalindrome;
    }

    return dArray;
  }

  async create(createDDto: CreateDDto): Promise<DObject> {
    let d = createDDto.d;
    d = isCamelCase(d) ? camelToSnake(d) : d;
    let newObj: DObject = this.dRepo.create({ d });
    newObj = await this.dRepo.save(newObj);

    return newObj;
  }

  async update(id: number, data: UpdateDDto): Promise<{message: string}> {
    const updateResult = await this.dRepo.update({ id }, data);

    if (!updateResult.affected) {
      return {message: `No object with id ${id} found`};
    }

    return {message: `Object ${id} successfully updated`};
  }

  async remove(id: number): Promise<{message: string}> {
    const deleteResult = await this.dRepo.delete(id);

    if (!deleteResult.affected) {
      return {message: `No object with id ${id} found`};
    }

    return {message: `Object ${id} successfully deleted`};
  }
}
