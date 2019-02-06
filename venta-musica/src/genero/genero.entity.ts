import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DiscoEntity} from "../disco/disco.entity";

@Entity('genero')

export class GeneroEntity {

    @PrimaryGeneratedColumn()
    idGenero: number;

    @Column()
    nombreGenero: string;


    @OneToMany(
        type => DiscoEntity,
        disco=>disco.genero
    )

    discos: DiscoEntity[];
}