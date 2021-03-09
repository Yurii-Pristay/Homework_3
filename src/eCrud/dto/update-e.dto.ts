import { IsBoolean } from "class-validator";

export class UpdateEDto {
    @IsBoolean()
    e: boolean
}