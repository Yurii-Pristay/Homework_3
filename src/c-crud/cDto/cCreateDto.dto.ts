import { IsNumber,IsString } from 'class-validator';

export class cCreateDto {

    @IsString()
    type:string;

    @IsNumber()
    speciality:number;
    //c: number;
}