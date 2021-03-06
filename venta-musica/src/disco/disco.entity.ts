import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DetallePedidoEntity} from "../detalle-pedido/detalle-pedido.entity";
import {AlbumEntity} from "../album/album.entity";
import {AutorEntity} from "../autor/autor.entity";
import {GeneroEntity} from "../genero/genero.entity";

@Entity('disco')

export class DiscoEntity {
    @PrimaryGeneratedColumn()
    idDisco: number;

    @Column({
        name:"nombreDisco",
        type:"varchar",
        length:40
    })
    nombreDisco: string;

    @Column({
        name:"anoDisco",
        type:"int",
    })
    anoDisco: number;

    @Column({
        name:"descripcionDisco",
        type:"varchar",
        length:40
    })
    descripcionDisco: string;

    @Column({
        name:"precioDisco",
        type:"decimal"
    })
    precioDisco: number;

    @Column({
        name:"idiomaDisco",
        type:"varchar",
        length:40
    })
    idiomaDisco: string;

    @Column({
        name:"fotoDisco",
        type:"varchar",
    })
    fotoDisco: string;

    @OneToMany(
        type => DetallePedidoEntity,
        detallePedido => detallePedido.disco
    )

    detallePedidos: DetallePedidoEntity[];

    @ManyToOne(
        type =>AlbumEntity ,
        album => album.discos
    )

    album:AlbumEntity


    @ManyToOne(
        type =>AutorEntity,
        autor => autor.discos
    )

    autor:AutorEntity



    @ManyToOne(
        type =>GeneroEntity ,
        genero => genero.discos
    )

    genero:GeneroEntity





}