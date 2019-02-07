import {IsNotEmpty, Matches} from "class-validator";

export class CreateAutorDto {

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    nombreAutor: string;

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    apellidoAutor: string;

}