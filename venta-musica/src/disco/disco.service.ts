import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {DiscoEntity} from "./disco.entity";
import {Repository, FindManyOptions} from "typeorm";

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

}