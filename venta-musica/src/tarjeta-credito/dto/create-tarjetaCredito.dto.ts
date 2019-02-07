import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateTarjetaCreditoDto {

    @IsNotEmpty()
    @IsString()
    numeroTarjeta: string;

    @IsNotEmpty()
    @IsNumber()
    codigoTarjeta: number;

    @IsNotEmpty()
    @IsString()
    tipoTarjeta: string;
}