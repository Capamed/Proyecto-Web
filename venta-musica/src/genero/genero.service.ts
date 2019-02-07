import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GeneroEntity } from "./genero.entity";
import { Repository } from "typeorm";

@Injectable()

export class GeneroService{
    constructor(
        @InjectRepository(GeneroEntity)
        private readonly _generoRepository: Repository<GeneroEntity>
    ){

    }


}