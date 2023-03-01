import {IsString, IsNotEmpty, IsNumber} from 'class-validator'


export class CreateAuthorDto {
    @IsString()
    @IsNotEmpty()
    readonly auth_name: string;


    @IsNumber()
    @IsNotEmpty()
    readonly auth_age: number;
}