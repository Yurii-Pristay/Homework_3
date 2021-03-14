import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { DObject } from '../interfaces/DObject';
import { DbObject } from '../interfaces/DbObject';
import { UpdateDDto } from './dto/update-d.dto';
import { CreateDDto } from './dto/create-d.dto';
import { isCamelCase, camelToSnake, isPalindrome } from './utils';

@Injectable()
export class DService {
  constructor(private dbService: DatabaseService) {}

  getAll(isPalindromeQuery: boolean): DObject[] {
    const dArray = this.dbService.dbArray
      .map(item => {
        if (item.d) return item as DObject;
      })
      .filter(item => item != null);
    // unable to import ParseBoolPipe due to:
    // "Module '"../../node_modules/@nestjs/common"'
    // has no exported member 'ParseBoolPipe'".
    if (isPalindromeQuery && isPalindromeQuery.toString() === 'true') {
      const dArrayPalindrome = dArray.map(item => {
        const newItem: DObject = JSON.parse(JSON.stringify(item));
        newItem.isPalindrome = isPalindrome(item.d);
        return newItem;
      });

      return dArrayPalindrome;
    }

    return dArray;
  }

  create(createDDto: CreateDDto): DObject {
    const newId = Math.max(...this.dbService.dbArray.map(({ id }) => id)) + 1;
    let d = createDDto.d;
    d = isCamelCase(d) ? camelToSnake(d) : d;
    const newObj: DObject = { id: newId, d };
    this.dbService.dbArray.push(newObj);
    return newObj;
  }

  update(id: number, updateDDto: UpdateDDto): object {
    const objToChange: DbObject = this.dbService.dbArray.find(
      item => item.id === id && item.d,
    );
    if (!objToChange) {
      return {message: `No object with id ${id} found`};
    }
    objToChange.d = updateDDto.d;
    return {message: `Object ${id} successfully updated`};
  }

  remove(id: number): object {
    const indToRemove = this.dbService.dbArray.findIndex(
      item => item.id === id && item.d,
    );
    if (indToRemove === -1) {
      return {message: `No object with id ${id} found`};
    }
    this.dbService.dbArray.splice(indToRemove, 1);
    return {message: `Object ${id} successfully deleted`};
  }
}
