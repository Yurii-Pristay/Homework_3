import { IsBoolean, IsNumber } from "class-validator";

export class UpdateEDto {
    @IsNumber()
    id: number;

    @IsBoolean()
    e: boolean;
}