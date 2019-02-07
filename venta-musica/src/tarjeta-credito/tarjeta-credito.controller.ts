import {Controller, Get, Res, Param, Post, Body} from "@nestjs/common";
import { response } from "express";
import { UsuarioEntity } from "src/usuario/usuario.entity";

@Controller('tarjeta-de-credito')

export class TarjetaCreditoController {


    @Get('modo-de-pago/:idUsuario')
    mostrarMododePago(
        @Res() response,
        @Param('idUsuario')idUsuario,
    ){
        console.log('estoy',idUsuario)
        response.render('crear-modoPago')
    }

    @Post('crear-tarjeta-de-credito')
    crearMododePago(
        @Res() response,
        @Body()tarjeta:TarjetaCredito,

    ){
        console.log(tarjeta)
    }

}

export interface TarjetaCredito{
    idTarjeta?:string;
    numeroTarjeta:string;
    tipoTarjeta: string;
    usuario: UsuarioEntity;
}