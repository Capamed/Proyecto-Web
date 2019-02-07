import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {AlbumEntity} from "./album.entity";
import {Repository} from "typeorm";

@Injectable()

export class AlbumService {
    constructor(
        @InjectRepository(AlbumEntity)
        private readonly _albumRepository:Repository<AlbumEntity>
    ){

    }

}