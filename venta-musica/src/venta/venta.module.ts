import {Module} from "@nestjs/common";
import {VentaController} from "./venta.controller";
import {VentaService} from "./venta.service";
import {UsuarioModule} from "./usuario/usuario.module";

@Module(
{
    imports:[
        UsuarioModule
    ],
    controllers:[
         VentaController
    ],
    providers:[
         VentaService
    ],
})

export class VentaModule {

}