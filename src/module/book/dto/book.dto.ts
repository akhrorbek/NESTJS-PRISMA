import { IsNotEmpty, IsString, IsUUID } from "class-validator";
export class CreateBookDto {

    @IsString()
    @IsNotEmpty()
    readonly book_title:string;

    @IsNotEmpty()
    @IsUUID()
    readonly authorId:string;
}