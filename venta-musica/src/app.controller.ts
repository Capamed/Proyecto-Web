import {BadRequestException, Body, Controller, Get, Post, Query, Res, Session} from '@nestjs/common';
import { AppService } from './app.service';
import {UsuarioService} from "./usuario/usuario.service";
import {CreateLoginDto} from "./dto/create-login.dto";
import {validate, ValidationError} from "class-validator";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService,
                private readonly _usuarioService:UsuarioService) {}


    @Get('home')
    mostrarHome(
        @Res() res
    ){
        res.render('home')
    }

    @Get('login')
    mostrarLogin(
        @Res() res,
        @Query('error') error: string
    ) {

        let mensaje = undefined;
        let clase = undefined;


        if(error){
            mensaje = "Datos erroneos";
        }

        res.render('login',{
            mensaje:mensaje,
            clase:clase
        })
    }

    @Post('login')
    async metodoLogin(
        @Body('correo') correo: string,
        @Body('password') password: string,
        @Res() res,
        @Session() sesion,

    ) {

        //let mensaje = undefined;

        const objetoValidacionLogin = new CreateLoginDto();
        objetoValidacionLogin.correo = correo;
        objetoValidacionLogin.password = password;

        const errores: ValidationError[] =
            await validate(objetoValidacionLogin) // Me devuelve un arreglo de validacion de errores

        const hayErrores = errores.length > 0;

        if (hayErrores) {
            console.error(errores)

            const parametrosConsulta = `?error=${errores[0].constraints}`;

            res.redirect('/login/' + parametrosConsulta)

        } else {

            const autenticacion = await this._usuarioService.autenticar(correo, password)

            if (autenticacion) {
                const idUsuario = autenticacion.idUsuario;

                res.redirect('/disco/disco/'+idUsuario);

            } else {
                res.redirect('/login')
            }
        }
    }
}
