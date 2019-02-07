import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {TarjetaCreditoEntity} from "./tarjeta-credito/tarjeta-credito.entity";
import {GeneroEntity} from "./genero/genero.entity";
import {DiscoEntity} from "./disco/disco.entity";
import {DetallePedidoEntity} from "./detalle-pedido/detalle-pedido.entity";
import {CabeceraPedidoEntity} from "./cabecera-pedido/cabecera-pedido.entity";
import {AutorEntity} from "./autor/autor.entity";
import {AlbumEntity} from "./album/album.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {AppController} from "./app.controller";
import {DiscoModule} from "./disco/disco.module";


@Module({
  imports: [
      TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port:  32783,
              database: 'bddMusica',
              username:'admin',
              password:'12345',
              synchronize: true,
              dropSchema: false,
              entities:[
                  UsuarioEntity,
                  TarjetaCreditoEntity,
                  GeneroEntity,
                  DiscoEntity,
                  DetallePedidoEntity,
                  CabeceraPedidoEntity,
                  AutorEntity,
                  AlbumEntity,
              ]

          }
      ),UsuarioModule,
      DiscoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
