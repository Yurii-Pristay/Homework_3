import { IsNumber } from 'class-validator';

export class cCreateDto {
    @IsNumber()
    readonly c: number;
}