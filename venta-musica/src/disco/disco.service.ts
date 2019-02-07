import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {DiscoEntity} from "./disco.entity";
import {Repository, FindManyOptions, FindOneOptions} from "typeorm";

@Injectable()

export class DiscoService {
    constructor(
        @InjectRepository(DiscoEntity)
        private readonly _discoRepository:Repository<DiscoEntity>
    ){
    }
    buscar(parametros?: FindManyOptions<DiscoEntity>): Promise<DiscoEntity[]> {
        return this._discoRepository.find(parametros)
    }

    async buscarPorId(idDiscoBuscar: number): Promise<DiscoEntity> {

        const consulta: FindOneOptions<DiscoEntity> = {
            where: {
                idDisco: idDiscoBuscar,

            }
        };
        return await this._discoRepository.findOne(consulta);
    }

}