import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {DetallePedidoEntity} from "./detalle-pedido.entity";

@Injectable()

export class DetallePedidoService {
    constructor(
        @InjectRepository(DetallePedidoService)
        private readonly _detallePedicoRepository:Repository<DetallePedidoEntity>
    ){

    }

}