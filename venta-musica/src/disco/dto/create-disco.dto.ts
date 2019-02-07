import {IsNotEmpty, IsNumber, Matches} from "class-validator";

export class CreateDiscoDto {

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    nombreDisco: string;

    @IsNotEmpty()
    @Matches(/\d{3}/)
    anoDisco: number;

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    descripcionDisco: string;

    @IsNotEmpty()
    @IsNumber()
    precioDisco: number;

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    idiomaDisco: string;

    @IsNotEmpty()
    fotoDisco:string;
}