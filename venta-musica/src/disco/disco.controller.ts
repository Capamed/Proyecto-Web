import {Controller, Get, Res, Query} from "@nestjs/common";
import {DiscoService} from "./disco.service";
import { DiscoEntity } from "./disco.entity";
import { FindManyOptions, Like } from "typeorm";

@Controller('disco')

export class DiscoController {
    constructor(private readonly _discoService:DiscoService){}


    @Get('disco')
    async paciente(
        @Res() response,
        @Query('busqueda') busqueda: string,
       
    ) {
            let mensaje = undefined;

            let discos: DiscoEntity[];

            if (busqueda) {

                const consulta: FindManyOptions<DiscoEntity> = {
                    where: [
                        {
                            nombreDisco: Like(`%${busqueda}%`)
                        },

                    ]
                };

                discos = await this._discoService.buscar(consulta);
            } else {

                discos = await this._discoService.buscar();
            }



            response.render('catalogo',
                {
                    arregloDisco: discos,
                    mensaje: mensaje,


                })
       
    }

//se inicializa la pantalla de crear usuario
    @Get('crear-Paciente')
    crearPaciente(
        @Res() response,
        @Session() sesion,
        @Query('error') error: string

    ) {

        if(sesion.rol === 'usuario'){
            let mensaje = undefined;

            if(error){
                mensaje = "Datos erroneos";
            }


            response.render(
                'crear-Paciente',{
                    mensaje:mensaje
                }
            )
        }else{
            response.redirect(
                '/login'
            )}
    }
}