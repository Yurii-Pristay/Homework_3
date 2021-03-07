import { IsString } from 'class-validator';

export class CreateDDto {
    @IsString()
    readonly d: string;
}
