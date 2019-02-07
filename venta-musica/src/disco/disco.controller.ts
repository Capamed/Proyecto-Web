import {Controller, Get, Res, Query, Param} from "@nestjs/common";
import {DiscoService} from "./disco.service";
import { DiscoEntity } from "./disco.entity";
import { FindManyOptions, Like } from "typeorm";
import { AlbumEntity } from "src/album/album.entity";
import { GeneroEntity } from "src/genero/genero.entity";
import { AutorEntity } from "src/autor/autor.entity";
import { AlbumService } from "src/album/album.service";
import { GeneroService } from "src/genero/genero.service";
import { AutorService } from "src/autor/autor.service";
import { Interface } from "readline";


@Controller('disco')

export class DiscoController {
    constructor(private readonly _discoService:DiscoService,
                private readonly _albumService:AlbumService,
                private readonly _generoServie:GeneroService,
                private readonly _autorServie:AutorService){}


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
        let album: AlbumEntity[];
        let genero: GeneroEntity[];
        let Autor: AutorEntity[];
     
        discos = await this._discoService.buscarPorId(+idDisco);
        album = await this._albumService.obtenerAlbum(+idDisco);
        genero = await this._albumService.obtenerGenero(+idDisco);
        autor = await this._albumService.obtenerAutor(+idDisco);

        response.render('catalogo',
            {
                arregloDisco: discos,
                mensaje: mensaje,
                idUsuario:idUsuario,
            })
   
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