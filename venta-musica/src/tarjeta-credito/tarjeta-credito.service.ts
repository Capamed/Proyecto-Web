import {Injectable} from "@nestjs/common";
import {TarjetaCreditoEntity} from "./tarjeta-credito.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { TarjetaCredito } from "./tarjeta-credito.controller";

@Injectable()

export class TarjetaCreditoService {
    constructor(
        @InjectRepository(TarjetaCreditoEntity)
        private readonly _tarjetaCreditoRepository:Repository<TarjetaCreditoEntity>
    ){
    }

    async crearTarjeta(nuevaTarjeta:TarjetaCredito): Promise<TarjetaCreditoEntity> {
        // Instanciar una entidad -> .create()
        const tarjetaEntity = this._tarjetaCreditoRepository.create(nuevaTarjeta);
        const tarjetaCreada = await this._tarjetaCreditoRepository.save(tarjetaEntity);
        return tarjetaCreada;
    }

}