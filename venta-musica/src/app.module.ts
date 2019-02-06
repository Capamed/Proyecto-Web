import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./venta/usuario/usuario.entity";
import {TarjetaCreditoEntity} from "./venta/tarjeta-credito/tarjeta-credito.entity";
import {GeneroEntity} from "./venta/genero/genero.entity";
import {DiscoEntity} from "./venta/disco/disco.entity";
import {DetallePedidoEntity} from "./venta/detalle-pedido/detalle-pedido.entity";
import {CabeceraPedidoEntity} from "./venta/cabecera-pedido/cabecera-pedido.entity";
import {AutorEntity} from "./venta/autor/autor.entity";
import {AlbumEntity} from "./venta/album/album.entity";
import {VentaModule} from "./venta/venta.module";
import * as http from "http-server";


@Module({
  imports: [
      TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port:  32769,
              database: 'bddMusica',
              username:'admin',
              password:'12345',
              synchronize: true,
              dropSchema: true,
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
      ),
      VentaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
