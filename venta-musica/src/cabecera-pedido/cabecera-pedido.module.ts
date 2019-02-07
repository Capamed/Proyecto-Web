import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {CabeceraPedidoEntity} from "./cabecera-pedido.entity";
import {CabeceraPedidoController} from "./cabecera-pedido.controller";
import {CabeceraPedidoService} from "./cabecera-pedido.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([CabeceraPedidoEntity])],
        controllers:[CabeceraPedidoController],
        providers:[CabeceraPedidoService],
        exports:[CabeceraPedidoService]
    }
)

export class CabeceraPedidoModule {
    
}