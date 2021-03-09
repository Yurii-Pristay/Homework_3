import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { DbObject } from '../interfaces/DbObject';
import { aUpdateDto } from "./dtoForA/update-aroute.dto";
import { aCreateDto } from "./dtoForA/create-aroute.dto";
let file = require("./file.json");
import * as fs from 'fs';
import * as  path from 'path';



@Injectable()
export class AService {
    constructor(readonly dbService: DatabaseService) {}


    POST(aCreateDto: aCreateDto) : DbObject {
        const newId = Math.max(...this.dbService.dbArray.map(({id}) => id)) + 1;
        let a = aCreateDto.a;
        const objToCreate: DbObject = {id: newId, a };
        this.dbService.dbArray.push(objToCreate);
        file.push(a);

        fs.writeFile(path.join(__dirname, "file.json"), JSON.stringify(file), err => {
            if (err) {
                throw (err);
            }
            // adding request body to file.json;
        });
        return(objToCreate);

    };


    PUT(id: number, aUpdateDto:aUpdateDto): string|object {

        const findObject: DbObject = this.dbService.dbArray.find((user) =>  user.id === id && user.a);
        if(!findObject){

            return ('Invalid data');
        }
        findObject.a = aUpdateDto.a;
        return (findObject);
    };


    DELETE(id:number):string {

        const findObject = this.dbService.dbArray.findIndex(user => user.id === id);
        if(!(findObject === -1)){
            this.dbService.dbArray.splice(findObject,1);

            return(`Object with id: ${findObject} was deleted`);
        }
        return("Invalid data");
    };


    GET(id:number): DbObject[] {

        if(id>5 && id!==1) {
            return (file.filter(({a}) => a));

        }

        return this.dbService.dbArray.filter(({a}) => a);

    }

}




