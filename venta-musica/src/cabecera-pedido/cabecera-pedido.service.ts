import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {CabeceraPedidoEntity} from "./cabecera-pedido.entity";
import {Repository} from "typeorm";
import {DetallePedidoEntity} from "../detalle-pedido/detalle-pedido.entity";

@Injectable()

export class CabeceraPedidoService {
    constructor(
        @InjectRepository(CabeceraPedidoEntity)
        private readonly _detallePedidoRepository:Repository<DetallePedidoEntity>
    ){

    }

}