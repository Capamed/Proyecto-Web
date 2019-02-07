import {IsNotEmpty, Matches} from "class-validator";

export class CreateGeneroDto {

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    nombreGenero: string;

}