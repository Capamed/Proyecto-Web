import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('autor')

export class AutorEntity {
    @PrimaryGeneratedColumn()
    idAutor: number;

    @Column()
    nombreAutor: string;

    @Column()
    apellidoAutor: string;



}