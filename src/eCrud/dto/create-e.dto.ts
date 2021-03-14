import { IsBoolean, IsNumber } from "class-validator";

export class CreateEDto {
    @IsNumber()
    id: number;

    @IsBoolean()
    e: boolean;
}