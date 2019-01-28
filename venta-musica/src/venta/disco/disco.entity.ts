import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DetallePedidoEntity} from "../detalle-pedido/detalle-pedido.entity";

@Entity('disco')

export class DiscoEntity {
    @PrimaryGeneratedColumn()
    idDisco: number;

    @Column()
    nombreDisco: string;

    @Column()
    anoDisco: number;

    @Column()
    descripcionDisco: string;

    @Column()
    precioDisco: number;

    @Column()
    idiomaDisco: string;

    @Column()
    fotoDiscoURL: string;


    @OneToMany(
        type => DetallePedidoEntity,
        detallePedido => detallePedido.disco
    )

    detallePedidos: DetallePedidoEntity[];




}