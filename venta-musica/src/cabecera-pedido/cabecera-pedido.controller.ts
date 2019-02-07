import {Controller} from "@nestjs/common";
import {CabeceraPedidoService} from "./cabecera-pedido.service";

@Controller('cabecera-pedido')

export class CabeceraPedidoController {
    constructor(private readonly _cabeceraPedidoService:CabeceraPedidoService){}


}