import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DetallePedidoEntity} from "../detalle-pedido/detalle-pedido.entity";
import {AlbumEntity} from "../album/album.entity";
import {AutorEntity} from "../autor/autor.entity";
import {GeneroEntity} from "../genero/genero.entity";

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