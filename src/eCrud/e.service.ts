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
        if (percentage) {
            //return count in obj 
            return this.eRepos.count({ e: true });
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
}

