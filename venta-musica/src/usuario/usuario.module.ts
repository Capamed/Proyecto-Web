import {Module} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioService} from "./usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioController} from "./usuario.controller";
import {TarjetaCreditoModule} from "../tarjeta-credito/tarjeta-credito.module";

@Module(
    {
        imports:[TypeOrmModule.forFeature([UsuarioEntity]),
        TarjetaCreditoModule],
        controllers:[UsuarioController],
        providers:[UsuarioService],
        exports: [UsuarioService]
    }
)

export class UsuarioModule {

}