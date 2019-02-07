import {Controller, Get, Res, Param, Post, Body} from "@nestjs/common";
import { response } from "express";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { CreateAutorDto } from "src/autor/dto/create-autor.dto";
import { CreateTarjetaCreditoDto } from "./dto/create-tarjetaCredito.dto";
import { ValidationError, validate } from "class-validator";

@Controller('tarjeta-de-credito')

export class TarjetaCreditoController {


    @Get('modo-de-pago/:idUsuario')
    mostrarMododePago(
        @Res() response,
        @Param('idUsuario')idUsuario,
    ){
        console.log('estoy',idUsuario)
        response.render('crear-modoPago',{
            idUsuario:idUsuario
        })
    }

    @Post('crear-tarjeta-de-credito/:idUsuario')
    async crearMododePago(
        @Res() response,
        @Body()tarjeta:TarjetaCredito,
        @Param('idUsuario')idUsuario
    ){
        console.log(tarjeta)
        console.log(idUsuario)
        
    }

}

export interface TarjetaCredito{
    idTarjeta?:string;
    numeroTarjeta:string;
    codigoTarjeta:number;
    tipoTarjeta: string;
    usuario: UsuarioEntity;
}