import { CreateEDto } from './dto/create-e.dto';
import { Injectable } from "@nestjs/common";
import { UpdateEDto } from './dto/update-e.dto';

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Injectable()
export class EService {
    private dbArray = [
        { id: 1, a: [1, 2, 3] },
        { id: 2, b: { key: "test" } },
        { id: 3, c: 123 },
        { id: 4, d: "test" },
        { id: 5, e: true },
    ];

    get(percentage) {
        if(percentage)//use queryparammmmm for get percentage
        {
            let percent = this.dbArray.filter(item => item.e === true).length / this.dbArray.filter(item => item.e === false).length;
            return percent*100 + "% true to false"
        }
        return this.dbArray.filter(item => item.e);
    }

    create(eDto: CreateEDto) {
        const newId: number = Math.max(...this.dbArray.map(({ id }) => id)) + 1;
        const createObj = {id: newId, e: eDto.e}
        this.dbArray.push(createObj);
        return this.dbArray[getRandomInt(1, this.dbArray.length)]//return random obj
    }

    update(eDto: UpdateEDto, id) {
        let updateObj;
        this.dbArray.map((item) => {
            if (item.id === id) {
                item.e = eDto.e;
                updateObj = item;
            }
        });
        return this.dbArray;
    }

    delete(idToRemove) {
        const indToRemove = this.dbArray.findIndex((item) => item.id === idToRemove);//add here parseintpipe
        if (indToRemove === -1) {
            return `Element with id ${idToRemove} wasn't found`;
        }
        this.dbArray.splice(indToRemove, 1);
    }
}

