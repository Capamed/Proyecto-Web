import {Controller, Get, Res, Query, Param} from "@nestjs/common";
import {DiscoService} from "./disco.service";
import { DiscoEntity } from "./disco.entity";
import { FindManyOptions, Like } from "typeorm";
import { AlbumEntity } from "src/album/album.entity";
import { GeneroEntity } from "src/genero/genero.entity";
import { AutorEntity } from "src/autor/autor.entity";
import { response } from "express";


@Controller('disco')

export class DiscoController {
    constructor(private readonly _discoService:DiscoService,
        ){}


    @Get('disco/:idUsuario')
    async disco(
        @Res() response,
        @Query('busqueda') busqueda: string,
        @Param('idUsuario')idUsuario,
       
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
                    idUsuario:idUsuario,
                })
       
    }

    @Get('detalle-de-disco/:idUsuario/:idDisco')
    async verDisco(
        @Res()response,
        @Param('idDisco')idDisco,
        @Param('idUsuario')idUsuario,
    ){
        let mensaje = undefined;

        let discos: Disco;
     
        discos = await this._discoService.buscarPorId(+idDisco);

        
        response.render('detalle-disco',
            {
                arregloDisco:discos,
                mensaje: mensaje,
                idUsuario:idUsuario,
            })
   
}


    @Get('/agregar-al-carrito/:idUsuario/:idDisco')
    compraDisco(
        @Res() response,
        @Param('idUsuario')idUsuario,
        @Param('idDisco')idDisco,
    ){
        response.render('carrito-compra')

    }






}


export interface Disco{
    idDisco:number,
    nombreDisco: string,
    anoDisco: number,
    descripcionDisco: string,
    precioDisco: number,
    idiomaDisco: string,
    album: AlbumEntity,
    genero: GeneroEntity,
    autor: AutorEntity,
}