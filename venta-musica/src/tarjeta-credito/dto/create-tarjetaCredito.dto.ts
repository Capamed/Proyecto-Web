import {IsNotEmpty, IsNumber, IsString, Matches} from "class-validator";

export class CreateTarjetaCreditoDto {

    @IsNotEmpty()
    @IsString()
    numeroTarjeta: string;

    @IsNotEmpty()
    @IsNumber()
    codigoTarjeta: number;

    @IsNotEmpty()
    @Matches(/^([a-z ñáéíóú]{2,60})$/i)
    tipoTarjeta: string;
}