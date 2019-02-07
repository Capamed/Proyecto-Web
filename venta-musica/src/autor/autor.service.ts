import {Injectable} from "@nestjs/common";
import {AutorEntity} from "./autor.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()

export class AutorService {
    constructor(
        @InjectRepository(AutorEntity)
        private readonly _autorRepository:Repository<AutorEntity>
    ){

    }

}