import { IsBoolean} from 'class-validator'
export class CreateEDto {
    @IsBoolean()
    e: boolean
}