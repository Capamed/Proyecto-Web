import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {CabeceraPedidoEntity} from "../cabecera-pedido/cabecera-pedido.entity";

@Entity('tarjeta-credito')

export class TarjetaCreditoEntity {

    @PrimaryGeneratedColumn()
    idTarjeta: number;

    @Column()
    numeroTarjeta: string;

    @Column()
    codigoTarjeta: number;

    @Column()
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