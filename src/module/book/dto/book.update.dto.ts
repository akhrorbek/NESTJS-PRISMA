import { IsNotEmpty, IsString, IsUUID } from "class-validator";
export class UpdateBookDto {

    @IsString()
    @IsNotEmpty()
    readonly book_title:string;

    @IsNotEmpty()
    @IsUUID()
    readonly authorId?:string;
}