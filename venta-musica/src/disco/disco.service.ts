import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {DiscoEntity} from "./disco.entity";
import {Repository} from "typeorm";

@Injectable()

export class DiscoService {
    constructor(
        @InjectRepository(DiscoEntity)
        private readonly _discoRepository:Repository<DiscoEntity>
    ){

    }

}