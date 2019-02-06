import {Module} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioService} from "./usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module(
    {
        imports:[
            TypeOrmModule.forFeature([
                UsuarioEntity
            ])
        ],
        providers:[
            UsuarioService
        ],
        exports: [
            UsuarioService
        ]
    }
)

export class UsuarioModule {

}