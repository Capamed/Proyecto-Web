import {Controller} from "@nestjs/common";

@Controller('detalle-pedido')

export class DetallePedidoController {
    constructor(private readonly _detallePedidoService:DetallePedidoController){}

}