import { IsString } from 'class-validator';

export class UpdateDDto {
    @IsString()
    readonly d: string;
}
