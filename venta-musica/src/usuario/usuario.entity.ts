import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TarjetaCreditoEntity} from "../tarjeta-credito/tarjeta-credito.entity";

@Entity('usuario')

export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    correo: string;

    @OneToMany(
        type => TarjetaCreditoEntity,
        tarjetaCredito => tarjetaCredito.usuario
    )
    //usuario tiene varias tarjetas
    tarjetasCredito: TarjetaCreditoEntity[];
}