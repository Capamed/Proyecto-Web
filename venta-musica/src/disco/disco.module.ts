import {Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {DiscoEntity} from "./disco.entity";
import {DiscoController} from "./disco.controller";
import {DiscoService} from "./disco.service";
import { AutorModule } from "src/autor/autor.module";
import { GeneroModule } from "src/genero/genero.module";
import { AlbumModule } from "src/album/album.module";

@Module(
    {
        imports:[TypeOrmModule.forFeature([DiscoEntity]),
    AutorModule,GeneroModule,AlbumModule],
        controllers:[DiscoController],
        providers:[DiscoService],
        exports:[DiscoService]
    }
)

export class DiscoModule {
    
}