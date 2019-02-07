import {IsNotEmpty, IsNumber, Matches} from "class-validator";

export class CreateAlbumDto {

    @IsNotEmpty()
    @IsNumber()
    idAlbum: number;

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    nombreAlbum: string;

}