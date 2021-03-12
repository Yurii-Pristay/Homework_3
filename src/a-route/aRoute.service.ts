import { Injectable } from '@nestjs/common';
import { aUpdateDto } from "./dtoForA/update-aroute.dto";
import { aCreateDto } from "./dtoForA/create-aroute.dto";
import {InjectRepository} from '@nestjs/typeorm';
import {A} from './a.entity';
import {Repository} from 'typeorm';
import {AObj} from '../interfaces/AObj';



@Injectable()
export class AService {
    constructor(
        @InjectRepository( A )
        private  ARepository: Repository<A>
    ) {}


    async POST( aCreateDto: aCreateDto ): Promise<AObj> {
        const objToCreate =  await this.ARepository.create( aCreateDto );
        return this.ARepository.save( objToCreate );
    };


    async PUT( id: number, aUpdateDto: aUpdateDto ): Promise<AObj> {
        await this.ARepository.update({ id }, aUpdateDto );
        return this.ARepository.findOne({ id });
    };


    async  DELETE( id: number ): Promise<string> {
        await this.ARepository.delete({ id });
        return `Object ${id} was successfully deleted`
    };


    async GET( id: number ): Promise<AObj[]|AObj> {
        if( id ) {
            return this.ARepository.findOne( { id } );
        }
        return this.ARepository.find();
    }

}



