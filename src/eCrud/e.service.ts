import { DbObject } from './../interfaces/DbObject';
import { CreateEDto } from './dto/create-e.dto';
import { Injectable } from "@nestjs/common";
import { UpdateEDto } from './dto/update-e.dto';
import { DatabaseService } from 'src/database/database.service';
import { InjectRepository } from '@nestjs/typeorm';
import { E } from './e.entity';
import { Repository } from 'typeorm';

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Injectable()
export class EService {

    constructor(
        @InjectRepository(E)
        private eRepos: Repository<E>

    ) { }

    read(percentage: boolean) {
        if(percentage)
        {
            let percent = this.eRepos.findAndCount({e:true})
            return percent;
        }
        return this.eRepos.find({ select: ['e'] })
    }

    create(eData: CreateEDto): CreateEDto {
        const createObj = this.eRepos.create(eData);
        this.eRepos.save(eData);
        return createObj;
    }

    update(id: number, eData: Partial<UpdateEDto>) {
        this.eRepos.update({ id }, eData);
        return this.eRepos.findOne({ id });
    }

    delete(id: number): string {
        this.eRepos.delete({ id });
        return `el with id: ${id} was deleted`;
    }






    // constructor(private dbService: DatabaseService) {}

    // get(percentage: boolean): DbObject[]|string {//use queryparammmmm for get percentage
    //     if(percentage)
    //     {
    //         let percent = this.dbService.dbArray.filter(item => item.e === true).length / this.dbService.dbArray.filter(item => item.e === false).length;
    //         return percent*100 + "% true to false"
    //     }
    //     return this.dbService.dbArray.filter(item => item.e);
    // }

    // create(eDto: CreateEDto): DbObject {
    //     const newId: number = Math.max(...this.dbService.dbArray.map(({ id }) => id)) + 1;
    //     const createObj: DbObject = {id: newId, e: eDto.e}
    //     this.dbService.dbArray.push(createObj);
    //     return this.dbService.dbArray[getRandomInt(1, this.dbService.dbArray.length)]//return random obj
    // }

    // update(eDto: UpdateEDto, id: number): DbObject {
    //     let updateObj: DbObject;
    //     this.dbService.dbArray.map((item) => {
    //         if (item.id === id) {
    //             item.e = eDto.e;
    //             updateObj = item;
    //         }
    //     });
    //     return updateObj;
    // }

    // delete(idToRemove: number): string {
    //     const indToRemove = this.dbService.dbArray.findIndex((item) => item.id === idToRemove);//add here parseintpipe
    //     if (indToRemove === -1) {
    //         return `Element with id ${idToRemove} wasn't found(`;
    //     }
    //     this.dbService.dbArray.splice(indToRemove, 1);
    //     return `Element with id ${idToRemove} was deleted)`
    // }
}

