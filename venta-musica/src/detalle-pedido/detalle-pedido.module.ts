import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {DetallePedidoEntity} from "./detalle-pedido.entity";
import {DetallePedidoController} from "./detalle-pedido.controller";
import {DetallePedidoService} from "./detalle-pedido.service";

@Module(
{
    imports:[TypeOrmModule.forFeature([DetallePedidoEntity])],
    controllers:[DetallePedidoController],
    providers:[DetallePedidoService],
    exports:[DetallePedidoService]
}
)

export class DetallePedidoModule {
    
}