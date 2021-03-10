import { IsNumber } from 'class-validator';

export class cUpdateDto {
    
    @IsNumber()
    readonly c: number;
}