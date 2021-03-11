import { HttpException, Injectable } from '@nestjs/common';

import { cCreateDto } from './cDto/cCreateDto.dto';
import { cUpdateDto } from './cDto/cUpdateDto.dto';
import { DbObject } from '../interfaces/DbObject';
import { CObject } from '../interfaces/CObj';
import { RouteС } from './routeС.entity';

import { DatabaseService } from 'src/database/database.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CCrudService {
    constructor(
        @InjectRepository(RouteС)
        private readonly routeCRepository: Repository<RouteС>) { }


    create(newData: cCreateDto): Promise<RouteС> {
        const objToCreate = this.routeCRepository.create(newData);
        if (typeof (objToCreate.speciality) !== 'number') {
            throw new HttpException("400 BadRequest", 400)
        }
        else {
            return this.routeCRepository.save(newData);
        }


    }

    findAll(): Promise<RouteС[]> {
        return this.routeCRepository.find();
    }

    async delete(id: number): Promise<void> {
        await this.routeCRepository.delete(id);
    }

    async update(id: number, data: cCreateDto): Promise<RouteС> {
        this.routeCRepository.update(id, data);
        return this.routeCRepository.findOne(id);
    }

    // create (newData:CObject): Promise<CObject>{// type of pr

    //     return new Promise(res => {
    //         const newId = Math.max(...this.dbService.dbArray.map(({ id }) => id)) + 1;
    //         const c: number = newData.c;
    //         const objToCreate:CObject = { id: newId, c };

    //         //console.log("type of data", typeof(c));
    //         //console.log("Created obj",objToCreate);

    //         if (typeof(objToCreate.c) !== 'number'){
    //             throw new HttpException("400 BadRequest",400)
    //         }
    //         else {
    //             this.dbService.dbArray.push(objToCreate);
    //             res (objToCreate);
    //         }
    //     })

    // }

    // read (): Promise<DbObject[]>{
    //     return new Promise (res=>{

    //         res(this.dbService.dbArray.filter( obj  => obj.c));
    //     })
    // }

    // update (dataId:number,newData:CObject): Promise <DbObject>{

    //     return new Promise (res => {

    //         const foundObj:DbObject = this.dbService.dbArray.find( obj => obj.id === dataId);
    //         if (!foundObj){
    //             throw new HttpException("Your id is invalid",404);
    //         }

    //         foundObj.c =newData.c;
    //         console.log("Upd obj",foundObj);
    //         res(foundObj);
    //     })
    // }

    // delete (id:number): Promise <number>{
    //     return new Promise (res => {
    //         const foundIndex = this.dbService.dbArray.findIndex((data) => data.id === id );
    //         if( foundIndex === -1 ){

    //             throw new HttpException("Your id is invalid",404);

    //         }
    //         this.dbService.dbArray.splice(foundIndex,1);

    //         //console.log(this.arr);
    //         res(foundIndex);

    //     })
    // }
}
