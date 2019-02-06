import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {VentaService} from "./venta.service";
import {UsuarioService} from "./usuario/usuario.service";
import {Column} from "typeorm";

@Controller('venta-musica')
export class VentaController {
    constructor(private readonly _ventaService: VentaService,
                private readonly _usuarioService: UsuarioService){
    }

    @Get('pantalla-principal')
    pantallaPrincipal(
        @Res() response,
    ){
        response.render('pantalla-principal')
    }

    @Get('crear-cuenta')
    crearCuentaGet(
        @Res() response,
        @Query('idUsuario') idUsuario,
    ){
        let mensaje = undefined;
        if (idUsuario){
            mensaje = `Usuario ${idUsuario} creado`;
        }
        response.render('crear-cuenta',{
            mensaje: mensaje,
        });
    }

    @Post('crear-cuenta')
    async crearCuentaPost(
        @Res() response,
        @Body() usuario:Usuario,
    ){
        const respuesta = await this._usuarioService.crearUsuario(usuario);
        const parametrosConsulta = `?idUsuario=${respuesta.idUsuario}`;
        response.redirect('/venta-musica/crear-cuenta/'+ parametrosConsulta)
    }


    @Get('crear-usuario-tarjeta')
    crearUsuarioTarjetaGet(
        @Query('idUsuario')hola,
        @Res() response,
        @Body() usuarioTarjeta,
    ){
        console.log(hola)
        response.render('iniciar-sesion')
    }

    @Get('iniciar-sesion')
    iniciarSesion(
        @Res() response,
    ){
        response.render('iniciar-sesion')
    }

}

export interface Usuario {
    idUsuario?: number;
    nombre:string;
    apellido:string;
    username: string;
    password: string;
    correo: string;
    fotoURL: string;
    tarjeta: TarjetaCredito;
}

export interface TarjetaCredito{
    idTarjeta: number;
    numeroTarjeta: string;
    codigoTarjeta: number;
    tipoTarjeta: string;
}