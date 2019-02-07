import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {AlbumEntity} from "./album.entity";
import {AlbumController} from "./album.controller";
import {AlbumService} from "./album.service";

@Module(
    {
        imports:[TypeOrmModule.forFeature([AlbumEntity])],
        controllers:[AlbumController],
        providers:[AlbumService],
        exports:[AlbumService]
    }
)

export class AlbumModule {
    
}