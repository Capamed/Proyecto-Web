import {Controller, Get, Res, Query} from "@nestjs/common";
import {DiscoService} from "./disco.service";
import { DiscoEntity } from "./disco.entity";
import { FindManyOptions, Like } from "typeorm";

@Controller('disco')

export class DiscoController {
    constructor(private readonly _discoService:DiscoService){}


    @Get('disco')
    async disco(
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

}