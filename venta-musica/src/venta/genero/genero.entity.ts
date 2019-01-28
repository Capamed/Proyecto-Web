import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('genero')

export class GeneroEntity {

    @PrimaryGeneratedColumn()
    idGenero: number;

    @Column()
    nombreGenero: string;

}