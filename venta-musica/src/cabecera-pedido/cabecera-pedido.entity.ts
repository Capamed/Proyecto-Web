import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TarjetaCreditoEntity} from "../tarjeta-credito/tarjeta-credito.entity";
import {DetallePedidoEntity} from "../detalle-pedido/detalle-pedido.entity";

@Entity('cabecera-pedido')

export class CabeceraPedidoEntity {

    @PrimaryGeneratedColumn()
    idCabeceraPedido: number;

    @Column({
        name:"numeroPedido",
        type:"int"
    })
    numeroPedido: number;

    @Column({
        name:"ivaPedido",
        type:"decimal"
    })
    ivaPedido: number;

    @ManyToOne(
        type => TarjetaCreditoEntity,
        tarjetaCredito => tarjetaCredito.cabeceraPedidos
    )

    tarjetaCredito: TarjetaCreditoEntity;


    @OneToMany(
        type => DetallePedidoEntity,
        detallePedido => detallePedido.cabeceraPedido
    )

   detallePedidos: DetallePedidoEntity[];

}