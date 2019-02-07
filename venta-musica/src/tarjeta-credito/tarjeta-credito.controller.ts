import {Controller, Get, Res, Param, Post, Body} from "@nestjs/common";
import { response } from "express";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { CreateAutorDto } from "src/autor/dto/create-autor.dto";
import { CreateTarjetaCreditoDto } from "./dto/create-tarjetaCredito.dto";
import { ValidationError, validate } from "class-validator";
import { TarjetaCreditoService } from "./tarjeta-credito.service";

@Controller('tarjeta-de-credito')

export class TarjetaCreditoController {
    constructor(private readonly _tarjetaService:TarjetaCreditoService
    ){
    }


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
    
        let mensaje = undefined;

        const objetoValidacionTarjeta = new CreateTarjetaCreditoDto();

        objetoValidacionTarjeta.numeroTarjeta = tarjeta.numeroTarjeta

        tarjeta.codigoTarjeta = Number(tarjeta.codigoTarjeta)
        objetoValidacionTarjeta.codigoTarjeta = tarjeta.codigoTarjeta

        objetoValidacionTarjeta.tipoTarjeta = tarjeta.tipoTarjeta

        const errores: ValidationError[] =
            await validate(objetoValidacionTarjeta) // Me devuelve un arreglo de validacion de errores

        const hayErrores = errores.length > 0;

        if (hayErrores) {
            console.error(errores)

            const parametrosConsulta = `?error=${errores[0].constraints}`;

            response.redirect('/tarjeta-de-credito/modo-pago' + parametrosConsulta)
        } else {
            
            tarjeta.usuario =idUsuario 
            const respuesta = await this._tarjetaService.crearTarjeta(tarjeta)
            response.redirect('/login')
        }
    }

}

export interface TarjetaCredito{
    idTarjeta?:number;
    numeroTarjeta:string;
    codigoTarjeta:number;
    tipoTarjeta: string;
    usuario: UsuarioEntity;
}