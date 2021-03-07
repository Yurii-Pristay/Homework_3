import { HttpException, Injectable } from '@nestjs/common';

import {cCreateDto} from './cDto/cCreateDto.dto';
import {cUpdateDto} from './cDto/cUpdateDto.dto';

@Injectable()
export class CCrudService {
    private dbArray = [
        { id: 1, a: [1, 2, 3] },
        { id: 2, b: { key: "test" } },
        { id: 3, c: 123 },
        { id: 4, d: "test" },
        { id: 5, e: true },
    ];

    create (newData:cCreateDto): Promise<any>{

        return new Promise(res => {
            // const {c} = JSON.parse (newData);

            // if (typeof(c) !== 'number'){
            //     throw new HttpException("400 BadRequest",400)
            // }
            // else{
            //     const newId = Math.max(...this.dbArray.map(({ id }) => id)) + 1;
            //     const objToCreate = {id:newId, c };
            //     this.dbArray.push(objToCreate);

            //     res (JSON.stringify(objToCreate));
            // }

            const newId = Math.max(...this.dbArray.map(({ id }) => id)) + 1;
            const objToCreate = { id: newId, c: newData.c };

            if (typeof(objToCreate.c) !== 'number'){
                throw new HttpException("400 BadRequest",400)
            }

            else {
                this.dbArray.push(objToCreate);

                res (objToCreate);

            }



        })

    }

    read (): Promise<any>{
        return new Promise (res=>{
            res(this.dbArray.filter( obj  => obj.c));
        })
    }

    update (dataId:number,newData:cUpdateDto): Promise <any>{

        //const {c,id:idft} = JSON.parse(newData);
         
        return new Promise (res => {

            const foundObj = this.dbArray.find( obj => obj.id === dataId);
            //const foundObj = this.dbArray.find(({id}) => id === idft);
            
            if (!foundObj){
                throw new HttpException("Your id is invalid",404);
            }
            
            foundObj.c =newData.c;
            res(foundObj);
        })
    }

    delete (id:number): Promise <any>{
        return new Promise (res => {
            //const {id} = JSON.parse(item);
            const foundIndex = this.dbArray.findIndex((data) => data.id === id );
            if( foundIndex === -1 ){

                throw new HttpException("Your id is invalid",404);
               
            }
            this.dbArray.splice(foundIndex,1);
      
            //console.log(this.arr);
            res(foundIndex);
        })
    }
}
