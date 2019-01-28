import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {CabeceraPedidoEntity} from "../cabecera-pedido/cabecera-pedido.entity";
import {DiscoEntity} from "../disco/disco.entity";

@Entity('detalle-pedido')
export class DetallePedidoEntity {

    @PrimaryGeneratedColumn()
    idDetallePedido: number;

    @Column()
    cantidad: number;

    @ManyToOne(
        type => CabeceraPedidoEntity,
        cabeceraPedido => cabeceraPedido.detallePedidos
    )
    cabeceraPedido: CabeceraPedidoEntity;


    @ManyToOne(
        type => DiscoEntity,
        disco => disco.detallePedidos
    )
    disco: DiscoEntity;

}