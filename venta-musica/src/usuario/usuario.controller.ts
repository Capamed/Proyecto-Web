import {BadRequestException, Body, Controller, Get, Param, Post, Query, Res, Session} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {CreateUsuarioDto} from "./dto/create-usuario.dto";
import {validate, ValidationError} from "class-validator";
import {TarjetaCreditoEntity} from "../tarjeta-credito/tarjeta-credito.entity";

@Controller('usuario')

export class UsuarioController {
    constructor(private readonly _usuarioService:UsuarioService
    ){

    }
    @Get('inicio')
    async mostrarUsuario(
        @Res() res,
        @Session() sesion,
        @Query('accion') accion:string,
        @Query('nombre') nombre:string,
        @Query('busqueda') busqueda:string
    ){

        let mensaje = undefined;
        let clase = undefined;

        console.log(sesion)

        if (accion && nombre) {
            switch (accion) {
                case 'crear':
                    mensaje = `Registro ${nombre} creado`;
                    break;
            }
        }

        let usuarios: UsuarioEntity[];

        res.render('lista-canciones',
            {
                arregloUsuario: usuarios,
                mensaje: mensaje,
                clase:clase

            })

    }

    @Get('crear-usuario')
    async mostrarCrearUsuario(
        @Res() res,
        @Query('error') error: string
    ){

        let mensaje = undefined;
        let clase = undefined;

        if(error){
            mensaje = "Datos erroneos";
            clase = 'alert alert-danger'
        }

        res.render('crear-usuario',{
            mensaje:mensaje,
            clase:clase
        })
    }

    @Post('crear-usuario')
    async crearUsuarioFuncion(
        @Res() res,
        @Body() datosUsuario
    ) {

        console.log(datosUsuario)
        let mensaje = undefined;
        let clase = undefined;

        const objetoValidacionUsuario = new CreateUsuarioDto();

        objetoValidacionUsuario.username = datosUsuario.username
        objetoValidacionUsuario.password = datosUsuario.password
        objetoValidacionUsuario.nombre = datosUsuario.nombre
        objetoValidacionUsuario.apellido = datosUsuario.apellido
        objetoValidacionUsuario.correo = datosUsuario.correo


        const errores: ValidationError[] =
            await validate(objetoValidacionUsuario) // Me devuelve un arreglo de validacion de errores

        const hayErrores = errores.length > 0;

        if (hayErrores) {
            console.error(errores)

            const parametrosConsulta = `?error=${errores[0].constraints}`;

            res.redirect('/usuario/crear-usuario' + parametrosConsulta)
        } else {

            const respuesta = await this._usuarioService.crearUsuario(datosUsuario)
            console.log(respuesta)
            const obtenerIdUsuario= respuesta.idUsuario;
            res.redirect('/tarjeta-de-credito/modo-de-pago/'+obtenerIdUsuario)

        }
    }

}

export interface Usuario{
    idUsuario?:number;
    username: string;
    password:string;
    nombre:string;
    apellido:string;
    correo:string;
}