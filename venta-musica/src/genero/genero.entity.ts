import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DiscoEntity} from "../disco/disco.entity";

@Entity('genero')

export class GeneroEntity {

    @PrimaryGeneratedColumn()
    idGenero: number;

    @Column({
        name:"nombreGenero",
        type:"varchar",
        length:40
    })
    nombreGenero: string;


    @OneToMany(
        type => DiscoEntity,
        disco=>disco.genero
    )

    discos: DiscoEntity[];
}