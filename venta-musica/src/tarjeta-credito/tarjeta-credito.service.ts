import {Injectable} from "@nestjs/common";
import {TarjetaCreditoEntity} from "./tarjeta-credito.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()

export class TarjetaCreditoService {
    constructor(
        @InjectRepository(TarjetaCreditoEntity)
        private readonly _tarjetaCreditoRepository:Repository<TarjetaCreditoEntity>
    ){

    }

}