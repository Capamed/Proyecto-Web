import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DiscoEntity} from "../disco/disco.entity";

@Entity('autor')

export class AutorEntity {
    @PrimaryGeneratedColumn()
    idAutor: number;

    @Column()
    nombreAutor: string;

    @Column()
    apellidoAutor: string;

    @OneToMany(
        type =>DiscoEntity,
        disco=> disco.autor
    )

    discos: DiscoEntity
}