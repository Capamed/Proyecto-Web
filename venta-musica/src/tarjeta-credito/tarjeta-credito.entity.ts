import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {CabeceraPedidoEntity} from "../cabecera-pedido/cabecera-pedido.entity";

@Entity('tarjeta-credito')

export class TarjetaCreditoEntity {

    @PrimaryGeneratedColumn()
    idTarjeta: number;

    @Column({
        name: "numeroTarjeta",
        type: "varchar",
        length: 30
    })
    numeroTarjeta: string;

    @Column({
        name:"codigoTarjeta",
        type:"int"
    })
    codigoTarjeta: number;

    @Column({
        name:"tipoTarjeta",
        type:"varchar",
        length:40
    })
    tipoTarjeta: string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.tarjetasCredito
    )
    usuario: UsuarioEntity;

    @OneToMany(
        type => CabeceraPedidoEntity,
        cabeceraPedido => cabeceraPedido.tarjetaCredito
    )

    cabeceraPedidos: CabeceraPedidoEntity[];

}